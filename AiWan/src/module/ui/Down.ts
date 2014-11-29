class Down extends egret.DisplayObjectContainer {
    private ico: egret.Bitmap;
    private btnArr: Array<ButtonDown> = new Array();
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(): void {
        this.ico = this.createBitmapByName("downPng");
        this.addChild(this.ico);
        this.addButtons();
    }
    private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        result.anchorX = result.anchorY = 0;
        var ww: number = this.stage.stageWidth / result.width;
        result.scaleX = result.scaleY = ww;
        return result;
    }
    private addButtons(): void {
        var size = this.height;
        var icn1: string = "";
        var xspan: number = this.stage.stageWidth / 10;
        var scale: number = 1;
        for (var i: number = 0; i < 5; i++) {
            switch (i) {
                case 0: icn1 = "DDFW"; scale = 0.8;
                    break;
                case 1: icn1 = "YY";
                    break;
                case 2: icn1 = "SY";
                    break;
                case 3: icn1 = "FX";
                    break;
                case 4: icn1 = "WD"; scale = 0.8;
                    break;
            }
            var btn: ButtonDown = new ButtonDown(size, size, 0xffffff, icn1, icn1 + "2", scale);
            btn.x = (i*2+1)*xspan ;
            btn.y = size / 2;
            btn.scaleX = btn.scaleY = scale;
            if (i == 2) btn.isselected = true;
            this.addChild(btn);
            this.btnArr.push(btn);
        }
       

       
    }
}