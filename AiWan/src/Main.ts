/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class Main extends egret.DisplayObjectContainer{
    /**
     * 加载进度界面
     */
    private loadingView: LoadingUI;
    private _txtInfo: egret.TextField;
    private isdebug: boolean = true;

    public constructor() {
        super();
        this._txtInfo = new egret.TextField();
        this._txtInfo.textColor = 0xffff00;
        this._txtInfo.text = "starting";
        this.addChild(this._txtInfo);

        ScreenUtil.getInstance().initLog(this.showLog, this);
        Loader.getInstance().initProcess(this.onPorcess,this.onCompleteFunction, this);

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //this.stage.addEventListener(egret.Event.CHANGE, this.onChange, this);
    }

    private onChange(event: egret.Event): void {
    }
    private onAddToStage(event: egret.Event) {

        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        this.addChild(this.loadingView);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json", "resource/");

        
    }

    public showLog(msg: string): void {
        this._txtInfo.text = msg;
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event: RES.ResourceEvent): void{
        this.onCompleteFunction();
        this.createGameScene();
    }
    private onCompleteFunction(): void {
        if (this.contains(this.loadingView)) {
            this.removeChild(this.loadingView);
        }
        
    }
    /**
     * 创建游戏场景
     */
    private createGameScene():void{
        var scence: Scence = new Scence();
        this.addChild(scence);
        if(this.isdebug)
        this.addChild(this._txtInfo);
    }
    private onPorcess(current,total): void {
        this.addChild(this.loadingView);
        this.loadingView.setProgress(current,total);
    }
}


