<p align="center">Camera2D简单实现</p>
=

[toc]

#### 一、实现逻辑
实现逻辑为：设FocusPosition焦点位置在舞台中心点，StageContainer类型是Sprite，为舞台上的root根容器，包含所有需要相对焦点移动的对象，FocusTarget焦点目标是舞台容器中任意一点，核心逻辑（伪代码）如下：

``` typescript
{
    stageContainer.x=foucusPosition.x-focusTarget.x(focusTarget的全局坐标x);
    stageContainer.y=foucusPosition.y-focusTarget.y(focusTarget的全局坐标y);
}
```
#### 二、实现示例
以下是应用示例，增加了缓动、边界，还有移动轨道的模拟：

``` typescript
    public update() {
        let t = this;
        if (!t._switch) return undefined;
        if (t._focusTarget == null) return undefined;
        if (t._focusTarget instanceof Laya.Sprite && t._focusTarget.parent == null) return undefined;
    
        if (Math.round((t._focusTarget.x - t._focusTracker.x) * (t._focusTarget.y - t._focusTracker.y)) == 0) {
            t._tempStep = t.trackStep;
            t._step = t._tempStep;
    
            t._focusTracker.x = t._focusTarget.x;
            t._focusTracker.y = t._focusTarget.y;
    
            if (t.isSwaping) {
                t.isSwaping = false;
                if (t.enableCallBack) t._stage.event(Camera2DEvent.SWAP_FINISHED);
            }
    
            t.isFocused = true;
        }
        else {
            t.isFocused = false;
        }
    
        t._focusTracker.x += (t._focusTarget.x - t._focusTracker.x) / t._step;
        t._focusTracker.y += (t._focusTarget.y - t._focusTracker.y) / t._step;
    
        t.positionStageContainer();
        t.testBounds();
    }
    private positionStageContainer(): void {
        let t = this;
        t._stageContainer.x += t._focusPosition.x - t.globalTrackerLoc.x;
        t._stageContainer.y += t._focusPosition.y - t.globalTrackerLoc.y;
    }
    private testBounds(): any {
        let t = this;
        var testResult = { top: false, bottom: false, left: false, right: false };
    
        if (t._boundaryLayer == null) return testResult;

        var stageBoundaryUpperLeft: Laya.Point = (t._boundaryLayer.parent as Laya.Sprite).localToGlobal(new Laya.Point(t._boundaryLayer.x, t._boundaryLayer.y));
        var stageBoundaryLowerRight: Laya.Point = (t._boundaryLayer.parent as Laya.Sprite).localToGlobal(new Laya.Point(t._boundaryLayer.x + t._boundaryLayer.width, t._boundaryLayer.y + t._boundaryLayer.height));
        var boundLeft: number = stageBoundaryUpperLeft.x;
        var boundTop: number = stageBoundaryUpperLeft.y;
        var boundRight: number = stageBoundaryLowerRight.x;
        var boundBottom: number = stageBoundaryLowerRight.y;
    
        if (boundLeft > 0) {
            if (!t.ignoreLeftBound) {
                t._stageContainer.x += 0 - boundLeft;
            }
    
            if (t.enableCallBack) {
                Camera2DEvent.boundary = 'left';
                t._stage.event(Camera2DEvent.boundary);
            }
    
            testResult.left = true;
        }
        if (boundRight < t._stage.designWidth) {
            if (!t.ignoreRightBound) {
                t._stageContainer.x += t._stage.designWidth - boundRight;
            }
    
            if (t.enableCallBack) {
                Camera2DEvent.boundary = 'right';
                t._stage.event(Camera2DEvent.boundary);
            }
    
            testResult.right = true;
        }
    
        if (boundTop > 0) {
            if (!t.ignoreTopBound) {
                t._stageContainer.y += 0 - boundTop;
            }
    
            if (t.enableCallBack) {
                Camera2DEvent.boundary = 'top';
                t._stage.event(Camera2DEvent.boundary);
            }
    
            testResult.top = true;
        }
        if (boundBottom < t._stage.designHeight) {
            if (!t.ignoreBottomBound) {
                t._stageContainer.y += t._stage.designHeight - boundBottom;
            }
            if (t.enableCallBack) {
                Camera2DEvent.boundary = 'bottom';
                t._stage.event(Camera2DEvent.boundary);
            }
            testResult.bottom = true;
        }
        return testResult;
    }
```

