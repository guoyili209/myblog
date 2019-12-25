<p align="center">H5游戏中2D场景和3D角色混合</p>
=

[toc]

## 一、概述
&ensp;&ensp;在H5的RPG游戏中，场景往往很大，因为页游资源是在线下载，对于很大的三维场景来说，不利于H5游戏的体验，另外也会增加游戏性能的开销,现在的H5游戏开始由原来的三渲二过渡到用一张2d场景图片，加3d角色的表现形式，增强角色和游戏的的表现力。
## 二、Laya中二维和三维的坐标转换(正交投影下)
### 1、二维转三维
```typescript
this.curCamera3D.convertScreenCoordToOrthographicCoord(vec32D, vec33D);
```
**注意，这里的二维坐标，是指屏幕坐标(二维全局坐标)，其他2d局部坐标应该先转换为2d全局坐标，并乘以浏览器缩放精度，再得到vec32D去转换，最后得到的结果vec33D才是正确的3d坐标**
### 2、三维转二维屏幕坐标
```typescript
this.curCamera3D.viewport.project(convertVec3, this.curCamera3D.projectionViewMatrix, outVec3);
        outVec3.x = outVec3.x / Laya.stage.clientScaleX;
        outVec3.y = outVec3.y / Laya.stage.clientScaleY;
```
&ensp;&ensp;二维屏幕坐标，及2d场景全局坐标。
### 3、正交投影下3D角色在2D场景中的转向
```typescript
private _turn() {
        let rotationConvertLocalToGlobal = new Laya.Point(this._pathX, this._pathY);
        //将bgLayer中的局部坐标转换为全局坐标
        rotationConvertLocalToGlobal = SceneManager.instance.bgLayer.localToGlobal(rotationConvertLocalToGlobal);
        let rotation2DPos: Laya.Vector3 = new Laya.Vector3();
        rotation2DPos.fromArray([rotationConvertLocalToGlobal.x, rotationConvertLocalToGlobal.y, 0]);
        let tanslateVec3 = new Laya.Vector3();
        //将2d全局坐标转换为3d坐标
        SceneManager.instance.convertScreenCoordToOrthographicCoord(rotation2DPos, tanslateVec3);
        //根据反正切函数，求出弧度
        let dy = tanslateVec3.y - this._pRoleSp3D.transform.position.y;
        let dx = tanslateVec3.x - this._pRoleSp3D.transform.position.x;
        let angle = Math.atan2(dy, dx) + .5 * Math.PI;
        //转换为角度
        let degree = angle * 180 / Math.PI;
        degree = 0 > degree ? 360 + degree : degree;

        var characterEuler = this._pRoleSp3D.transform.localRotationEuler;
        if (characterEuler) {
            this._characterEuler = characterEuler;
            Laya.Tween.clearTween(characterEuler);
            //将旋转角度约束到-180到180之间
            if (degree - characterEuler.y > 180) {
                degree -= 360;
            } else if (degree - characterEuler.y < -180) {
                degree += 360;
            }
            //绕Y轴缓动旋转
            Laya.Tween.to(characterEuler, { y: degree, update: new Laya.Handler(this, this._rotationUpdate) }, 60, Laya.Ease.linearOut, null, 0);
        } else {
            this._pRoleSp3D.transform.localRotationEuler = new Laya.Vector3(0, degree, 0);
        }
    }
    private _rotationUpdate() {
        if (this._characterEuler.y > 360) {
            this._characterEuler.y -= 360;
        } else if (this._characterEuler.y < 0) {
            this._characterEuler.y += 360;
        }
        if (this._pRoleSp3D) {
            this._pRoleSp3D.transform.localRotationEuler = this._characterEuler;
        }
    }
```
