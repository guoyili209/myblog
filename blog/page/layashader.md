<p align="center">Laya自定义Shader简单介绍</p>
=

[toc]

#### 一、先定义一个材质类，并指定使用的着色器。

``` typescript
class CustomMaterialSimple extends Laya.BaseMaterial {
    public static DIFFUSETEXTURE: number = 1;
    public static MARGINALCOLOR: number = 2;
    /*
    *BaseMaterial里边有一个专门存储各种值的数组，这个
    *number数据是索引，表示在数组索引3这个位置存取反
    *射率这个值
    */
    public static ALBEDO: number = 3; 
    constructor() {
        super();
        this.setShaderName("CustomSimple");
    
        this.renderQueue = 3000;
        this.cull = 2;
        this.blend = 1;
        this.srcBlend = 0x0302;
        this.dstBlend = 0x0303;
        this.albedo = new Laya.Vector4(1, 1, 1, 1);
    }
    //设置反射率（可以改透明度）
    set albedo(vec4) {
        this._setColor(3, vec4);
    }
    get albedo() {
        return this._getColor(3);
    }
    set renderMode(value) {
    
    }
    /**
     * 获取漫反射贴图。
     *  漫反射贴图。
     */
    public get diffuseTexture(): Laya.BaseTexture {
        return this._getTexture(CustomMaterialSimple.DIFFUSETEXTURE);
    }
    
    /**
     * 设置漫反射贴图。
     * 漫反射贴图。
     */
    public set diffuseTexture(value: Laya.BaseTexture) {
        this._setTexture(CustomMaterialSimple.DIFFUSETEXTURE, value);
    }
    
    /**
     * 设置边缘光照颜色。
     * 边缘光照颜色。
     */
    public set marginalColor(value: Laya.Vector3) {
        this._setColor(CustomMaterialSimple.MARGINALCOLOR, value);
    }
}
```

#### 二、再定义供材质使用的着色器shader

``` typescript
class CustomSimple {
    static initShader(): void {
        /*
        * 顶点着色器要用的属性映射，laya会设置好这些
        * 值，不需要我们自己去设置
        */
        var attributeMap = {
            'a_Position':/*laya.d3.graphics.VertexElementUsage.POSITION0*/0,
            'a_Texcoord0':/*laya.d3.graphics.VertexElementUsage.TEXTURECOORDINATE0*/2,
            'a_BoneWeights':/*laya.d3.graphics.VertexElementUsage.BLENDWEIGHT0*/7,
            'a_BoneIndices':/*laya.d3.graphics.VertexElementUsage.BLENDINDICES0*/6,
        };
        /*
        * 我们自定义的值在这里添加映射，比如u_Albedo
        * 反射率，后面跟的数组，第一个元素表示，在材质
        * 存储数据的数组的第3个索引处取值，第二个元素
        * 表示在材质发生变化时候，更新这个值
        */
        var uniformMap = {
            'u_Bones': [ /*laya.d3.core.SkinnedMeshSprite3D.BONES*/0,/*laya.d3.shader.Shader3D.PERIOD_RENDERELEMENT*/0],
            'u_MvpMatrix': [Laya.Sprite3D.MVPMATRIX, Laya.Shader3D.PERIOD_SPRITE],
            'u_DiffuseTexture': [ /*laya.d3.core.material.PBRStandardMaterial.DIFFUSETEXTURE*/1,/*laya.d3.shader.Shader3D.PERIOD_MATERIAL*/1],
            'u_Albedo': [CustomMaterialSimple.ALBEDO/*3*/, Laya.Shader3D.PERIOD_MATERIAL/*1*/]
        };
        var vs: string = "attribute vec4 a_Position;\n" +
            "uniform mat4 u_MvpMatrix;\n" +
            "attribute vec2 a_Texcoord0;\n" +
            "varying vec2 v_Texcoord0;\n" +
            "attribute vec4 a_BoneIndices;\n" +
            "attribute vec4 a_BoneWeights;\n" +
            "const int c_MaxBoneCount = 24;\n" +
            "uniform mat4 u_Bones[c_MaxBoneCount];\n" +
    
            "void main(){\n" +
            "mat4 skinTransform= mat4(0.0);\n" +
            "skinTransform += u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n" +
            "skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n" +
            "skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n" +
            "skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n" +
            "vec4 position= skinTransform * a_Position;\n" +
            "gl_Position = u_MvpMatrix * position;\n" +
            "v_Texcoord0= a_Texcoord0;\n}";
        var ps: string = "#ifdef FSHIGHPRECISION\n" +
            "precision highp float;\n" +
            "#else\n" +
            "precision mediump float;\n" +
            "#endif\n" +
            "varying vec2 v_Texcoord0;\n" +
            "uniform sampler2D u_DiffuseTexture;\n" +
            "uniform vec4 u_Albedo;\n" +
            "void main(){\n" +
            "gl_FragColor=texture2D(u_DiffuseTexture, v_Texcoord0);\n" +
            "gl_FragColor=gl_FragColor*u_Albedo;}"
        var customShader = Laya.Shader3D.nameKey.add("CustomSimple");
        Laya.ShaderCompile3D.add(customShader, vs, ps, attributeMap, uniformMap);
    }
}
```

#### 三、使用自定义着色器
将使用自定义着色器的材质，赋值给任意meshRender即可。
``` typescript
private _findMaterial(sp3d, url, id) {
        let material: CustomMaterialSimple = new CustomMaterialSimple();
        material.diffuseTexture = Laya.loader.getRes(url + id + "/Assets/assets/texture/" + id + ".jpg");
        if (sp3d instanceof Laya.SkinnedMeshSprite3D) {
            sp3d.skinnedMeshRender.material = material;
        } else if (sp3d instanceof Laya.MeshSprite3D) {
            sp3d.meshRender.material = material;
    
        }
}
```

