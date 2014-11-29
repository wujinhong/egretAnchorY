class ModuleMain extends ModuleBase {
    public constructor() {
        super();
        
        this.moduletype = "ModuleMain";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.y = -300;
    }
    private onAddToStage(): void {
        this.scaleHeight = this.stage.stageHeight / this.totalHeight;
    }
    protected clear(): void {
        egret.Tween.removeAllTweens();
    }
    public onloadCompelete(): void {
        this.container = new egret.DisplayObjectContainer();
        this.addChild(this.container);
        this.initModule();
        var tw: egret.Tween = egret.Tween.get(this);
        tw.to({ y: 0 }, 1000, egret.Ease.elasticOut);
        tw.call(this.onShowMainOK, this);

        this.onCreateComplete();
    }
    private edgNum: number = 7;
    private totalHeight = 960;
    private scaleHeight = 1;
    private heightTitle: number = 36;
    private topBtnHeight: number = 180;
    private height1: number = 100;
    private height2: number = 210;
    private  starty: number = this.edgNum;
    private downUI: Down;
    private container: egret.DisplayObjectContainer;

    private onShowMainOK(): void {
        this.downUI = new Down();
        this.addChild(this.downUI);
        this.downUI.y = 1200;

        var tw: egret.Tween = egret.Tween.get(this.downUI);
        tw.to({ y: this.stage.stageHeight - this.downUI.height }, 1000);

        this.onaddMove(this.container, -(this.starty - this.stage.stageHeight+ this.downUI.height), 0);
    }
    protected  initModule(): void {
        
        this.starty = this.addTitle(this.starty);
        this.starty = this.addTopBtn(this.starty);
        this.starty = this.addBtn1s(this.starty);
        this.starty = this.addBtn2s(this.starty);
        this.starty = this.addBtn3s(this.starty);
        this.starty = this.addBtn4s(this.starty);
        this.starty = this.addBtn5s(this.starty);
        this.starty = this.addBtn6s(this.starty);
       
    }


    private addTitle(starty: number): number {
        this.heightTitle = this.scaleHeight * this.heightTitle; 
        var btn1: ButttonBase = new ButttonBase(this.stage.stageWidth, this.heightTitle, 0xff0000, "", 1); 
        btn1.x = this.stage.stageWidth/2;
        btn1.y = this.heightTitle/2;
        this.container.addChild(btn1);
        starty = this.heightTitle / 2 + this.heightTitle / 2 + this.edgNum;
        return starty;
    }
    private addTopBtn(starty: number): number {
        var btnHeight: number = this.scaleHeight * this.topBtnHeight;
        var btn1: ButttonBase = new ButttonBase(this.stage.stageWidth - this.edgNum * 2, btnHeight, 0x5EBAF7, "GGZZ",1);
        btn1.x = this.stage.stageWidth / 2;
        btn1.y = starty + btnHeight/2;
        this.container.addChild(btn1);
    
        starty = starty + btnHeight + this.edgNum;
        return starty;
    }
    
    private addBtn1s(starty: number): number {
        this.height1 = this.scaleHeight * this.height1;

        var num: number = 4;
        var ww: number = this.getClipWidth(num);
        for (var i: number = 0; i < num; i++) {
            var imgstr: string = "";
            var clr:number = 0;
            switch (i) {
                case 0:
                    imgstr = "JRTH";
                    clr = 0xF15D5D;
                    break;
                case 1:
                    imgstr = "GY";
                    clr = 0xF15D5D;
                    break;
                case 2:
                    imgstr = "ZDF";
                    clr = 0xF15D5D;
                    break;
                case 3:
                    imgstr = "JSJ";
                    clr = 0x7E61F9;
                    break;
            }
            var btn1: ButttonBase = new ButttonBase(ww, this.height1, clr, imgstr,1);
            btn1.x = this.edgNum + i * (ww + this.edgNum) + ww/2;
            btn1.y = starty + this.height1/2;
            this.container.addChild(btn1);
            
        }
        starty = starty + this.height1 + this.edgNum;
        return starty;
    }
    private addBtn2s(starty: number): number {
        this.height2 = this.scaleHeight * this.height2;
        var num: number =2;
        var ww: number = this.getClipWidth(num);
        for (var i: number = 0; i < num; i++) {

            var imgstr: string = "";
            var clr: number = 0;
            switch (i) {
                case 0:
                    imgstr = "JD";
                    clr = 0xF15D5D;
                    break;
                case 1:
                    imgstr = "JP";
                    clr = 0x7E61F9;
                    break;
            }
            var btn1: ButttonBase = new ButttonBase(ww, this.height2, clr, imgstr,1);
            btn1.x = this.edgNum + i * (ww + this.edgNum) + ww / 2;
            btn1.y = starty + this.height2/2;
            this.container.addChild(btn1);
        }
        starty = starty + this.height2 + this.edgNum;
        return starty;
    }
    private addBtn3s(starty: number): number {
        var num: number = 2;
        var ww: number = this.getClipWidth(num);
        for (var i: number = 0; i < num; i++) {
            var imgstr: string = "";
            var clr: number = 0;
            switch (i) {
                case 0:
                    imgstr = "ZMY";
                    clr = 0xF38923;
                    break;
                case 1:
                    imgstr = "TG";
                    clr = 0x2F87D1;
                    break;
            }

            var btn1: ButttonBase = new ButttonBase(ww, this.height1, clr, imgstr,1);
            btn1.x = this.edgNum + i * (ww + this.edgNum) + ww/2;
            btn1.y = starty + this.height1/2;
            this.container.addChild(btn1);
        }
        starty = starty + this.height1 + this.edgNum;
        return starty;
    }
    private addBtn4s(starty: number): number {
        var num: number = 2;
        var ww: number = this.getClipWidth(num);
        for (var i: number = 0; i < num; i++) {
            var imgstr: string = "";
            var clr: number = 0;
            switch (i) {
                case 0:
                    imgstr = "JDMP";
                    clr = 0xF38923;
                    break;
                case 1:
                    imgstr = "GL";
                    clr = 0x2F87D1;
                    break;
            }

            var btn1: ButttonBase = new ButttonBase(ww, this.height1, clr, imgstr,1);
            btn1.x = this.edgNum + i * (ww + this.edgNum) + ww / 2;
            btn1.y = starty + this.height1/2
            this.container.addChild(btn1);
        }
        starty = starty + this.height1 + this.edgNum;
        return starty;
    }
    private addBtn5s(starty: number): number {
        var num: number = 2;
        var ww: number = this.getClipWidth(num);
        for (var i: number = 0; i < num; i++) {

            var imgstr: string = "";
            var clr: number = 0;
            switch (i) {
                case 0:
                    imgstr = "CC";
                    clr = 0x8EB42D;
                    break;
                case 1:
                    imgstr = "LYDJ";
                    clr = 0x22A094;
                    break;
            }
            var btn1: ButttonBase = new ButttonBase(ww, this.height1, clr, imgstr,1);
            btn1.x = this.edgNum + i * (ww + this.edgNum) + ww/2;
            btn1.y = starty + this.height1/2;
            this.container.addChild(btn1);
        }
        starty = starty + this.height1 + this.edgNum;
        return starty;
    }
    private addBtn6s(starty: number): number {
        var num: number = 3;
        var ww: number = this.getClipWidth(num);
        var xx: number =0;
        for (var i: number = 0; i < num; i++) {
            var imgstr: string = "";
            var clr: number = 0;
            switch (i) {
                case 0:
                    ww = this.getClipWidth(2);
                    imgstr = "HCP";
                    clr = 0x8EB42D;
                    xx = this.edgNum + i * (ww + this.edgNum) + ww / 2;
                    break;
                case 1:
                    ww = this.getClipWidth(4);
                    xx = this.stage.stageWidth / 2 + this.edgNum / 2 + ww / 2;
                    imgstr = "LXSJ";
                    clr = 0x22A094;
                   
                    break;
                case 2:
                    ww = this.getClipWidth(4);
                    xx = this.stage.stageWidth / 2 + this.edgNum / 2 + ww + this.edgNum + ww/2;
                    imgstr = "DDR";
                    clr = 0x22A094;
                    break;
            }

            var btn1: ButttonBase = new ButttonBase(ww, this.height1, clr, imgstr,1);
            btn1.x = xx;
            btn1.y = starty + this.height1/2;
            this.container.addChild(btn1);
        }
        starty = starty + this.height1 + this.edgNum;
        return starty;
    }




    private getClipWidth(num: number): number {
        return(this.stage.stageWidth - this.edgNum * (num + 1)) / num;
    }


    
}