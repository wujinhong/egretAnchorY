class ModuleOut extends ModuleBase {
    public constructor() {
        super();
        this.moduletype = "ModuleOut";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(): void {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouchEnd, this);
    }
    public onloadCompelete(): void {
        var bmp: egret.Bitmap = BitmapUtil.createBitmapByName("TT");
        bmp.width = this.stage.stageWidth;
        bmp.height = this.stage.stageHeight;
        this.addChild(bmp);

        
    }
    private ontouchEnd(e: egret.TouchEvent): void {
        var ee = new egret.Event("change");
        ee.data = "ModuleMain";
        EventManager.dispatcher.dispatchEvent(ee);
    }
  


}