class Scence extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        EventManager.dispatcher.addEventListener("change", this.onchange,this);
    }
    private onAddToStage(): void {
        
        this.changeModule();
    }
    private _modulename: string = "ModuleMain";
    private _module: ModuleBase;
    private changeModule(): void {
        if (this._module != null) {
            this._module.distory();
            this.removeChild(this._module);
            this._module = null;
        }
        this.craeteModule();
    }
    private craeteModule(): void {
        ScreenUtil.getInstance().showLog("_modulename====" + this._modulename);
        switch (this._modulename) {
            case "ModuleMain":
                this._module = new ModuleMain();
                break;
            default:
                this._module = new ModuleOut();
                break;
        }
       
        this.addChild(this._module);
        this._module.startLoad(this.onInitComplete, this);
    }
    private onInitComplete(): void {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xfefefe, 1);
        shp.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        shp.graphics.endFill();
        this.addChildAt(shp,0);
        
    }
    private onchange(e: egret.Event): void {
        this._modulename = e.data;
        this.changeModule();
    }

    
}