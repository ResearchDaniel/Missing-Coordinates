(globalThis.webpackChunkmissing_coordinates_demo=globalThis.webpackChunkmissing_coordinates_demo||[]).push([[179],{29180:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(39011).configure)([__webpack_require__(68870)],module,!1)},38503:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});var client_api=__webpack_require__(14419),esm=__webpack_require__(87537),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,client_api.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},30808:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(39011)},83950:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,default:()=>PCDemo_stories});var internal=__webpack_require__(4854);function create_fragment(ctx){let line,line_x__value,line_x__value_1,line_y__value;return{c(){line=(0,internal.bi5)("line"),(0,internal.Ljt)(line,"x1",line_x__value=ctx[0].offset),(0,internal.Ljt)(line,"x2",line_x__value_1=ctx[0].offset),(0,internal.Ljt)(line,"y1","0"),(0,internal.Ljt)(line,"y2",line_y__value=ctx[1].axisHeight),(0,internal.Ljt)(line,"stroke","black")},m(target,anchor){(0,internal.$Tr)(target,line,anchor)},p(ctx,[dirty]){1&dirty&&line_x__value!==(line_x__value=ctx[0].offset)&&(0,internal.Ljt)(line,"x1",line_x__value),1&dirty&&line_x__value_1!==(line_x__value_1=ctx[0].offset)&&(0,internal.Ljt)(line,"x2",line_x__value_1),2&dirty&&line_y__value!==(line_y__value=ctx[1].axisHeight)&&(0,internal.Ljt)(line,"y2",line_y__value)},i:internal.ZTd,o:internal.ZTd,d(detaching){detaching&&(0,internal.ogt)(line)}}}function instance($$self,$$props,$$invalidate){let{axis}=$$props,{drawConfiguration}=$$props;return $$self.$$set=$$props=>{"axis"in $$props&&$$invalidate(0,axis=$$props.axis),"drawConfiguration"in $$props&&$$invalidate(1,drawConfiguration=$$props.drawConfiguration)},[axis,drawConfiguration]}class Axis extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,instance,create_fragment,internal.N8,{axis:0,drawConfiguration:1})}}const Axis_svelte=Axis;function get_each_context(ctx,list,i){const child_ctx=ctx.slice();return child_ctx[3]=list[i],child_ctx}function create_each_block(ctx){let axis,current;return axis=new Axis_svelte({props:{axis:ctx[3],drawConfiguration:ctx[0]}}),{c(){(0,internal.YCL)(axis.$$.fragment)},m(target,anchor){(0,internal.yef)(axis,target,anchor),current=!0},p(ctx,dirty){const axis_changes={};2&dirty&&(axis_changes.axis=ctx[3]),1&dirty&&(axis_changes.drawConfiguration=ctx[0]),axis.$set(axis_changes)},i(local){current||((0,internal.Ui)(axis.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(axis.$$.fragment,local),current=!1},d(detaching){(0,internal.vpE)(axis,detaching)}}}function Axes_svelte_create_fragment(ctx){let g,current,each_value=ctx[1],each_blocks=[];for(let i=0;i<each_value.length;i+=1)each_blocks[i]=create_each_block(get_each_context(ctx,each_value,i));const out=i=>(0,internal.etI)(each_blocks[i],1,1,(()=>{each_blocks[i]=null}));return{c(){g=(0,internal.bi5)("g");for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].c()},m(target,anchor){(0,internal.$Tr)(target,g,anchor);for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].m(g,null);current=!0},p(ctx,[dirty]){if(3&dirty){let i;for(each_value=ctx[1],i=0;i<each_value.length;i+=1){const child_ctx=get_each_context(ctx,each_value,i);each_blocks[i]?(each_blocks[i].p(child_ctx,dirty),(0,internal.Ui)(each_blocks[i],1)):(each_blocks[i]=create_each_block(child_ctx),each_blocks[i].c(),(0,internal.Ui)(each_blocks[i],1),each_blocks[i].m(g,null))}for((0,internal.dvw)(),i=each_value.length;i<each_blocks.length;i+=1)out(i);(0,internal.gbL)()}},i(local){if(!current){for(let i=0;i<each_value.length;i+=1)(0,internal.Ui)(each_blocks[i]);current=!0}},o(local){each_blocks=each_blocks.filter(Boolean);for(let i=0;i<each_blocks.length;i+=1)(0,internal.etI)(each_blocks[i]);current=!1},d(detaching){detaching&&(0,internal.ogt)(g),(0,internal.RMB)(each_blocks,detaching)}}}function Axes_svelte_instance($$self,$$props,$$invalidate){let axes,{drawConfiguration}=$$props,{data}=$$props;return $$self.$$set=$$props=>{"drawConfiguration"in $$props&&$$invalidate(0,drawConfiguration=$$props.drawConfiguration),"data"in $$props&&$$invalidate(2,data=$$props.data)},$$self.$$.update=()=>{5&$$self.$$.dirty&&$$invalidate(1,axes=data.axes.map(((value,index)=>({name:value.name,offset:index*drawConfiguration.axesSpacing}))))},[drawConfiguration,axes,data]}class Axes extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,Axes_svelte_instance,Axes_svelte_create_fragment,internal.N8,{drawConfiguration:0,data:2})}}const Axes_svelte=Axes;function AxisAnnotation_svelte_create_fragment(ctx){let g,text0,t0,text0_x_value,text0_style_value,text1,t1,text1_x_value,text1_style_value,t0_value=ctx[0].max+"",t1_value=ctx[0].min+"";return{c(){g=(0,internal.bi5)("g"),text0=(0,internal.bi5)("text"),t0=(0,internal.fLW)(t0_value),text1=(0,internal.bi5)("text"),t1=(0,internal.fLW)(t1_value),(0,internal.Ljt)(text0,"x",text0_x_value=ctx[0].offset),(0,internal.Ljt)(text0,"y","0"),(0,internal.Ljt)(text0,"style",text0_style_value=`text-anchor: ${ctx[1].axisAnnotationConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`),(0,internal.Ljt)(text1,"x",text1_x_value=ctx[0].offset),(0,internal.Ljt)(text1,"y",ctx[2]),(0,internal.Ljt)(text1,"style",text1_style_value=`text-anchor: ${ctx[1].axisAnnotationConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`),(0,internal.Ljt)(g,"id","annotation-group")},m(target,anchor){(0,internal.$Tr)(target,g,anchor),(0,internal.R3I)(g,text0),(0,internal.R3I)(text0,t0),(0,internal.R3I)(g,text1),(0,internal.R3I)(text1,t1)},p(ctx,[dirty]){1&dirty&&t0_value!==(t0_value=ctx[0].max+"")&&(0,internal.rTO)(t0,t0_value),1&dirty&&text0_x_value!==(text0_x_value=ctx[0].offset)&&(0,internal.Ljt)(text0,"x",text0_x_value),2&dirty&&text0_style_value!==(text0_style_value=`text-anchor: ${ctx[1].axisAnnotationConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`)&&(0,internal.Ljt)(text0,"style",text0_style_value),1&dirty&&t1_value!==(t1_value=ctx[0].min+"")&&(0,internal.rTO)(t1,t1_value),1&dirty&&text1_x_value!==(text1_x_value=ctx[0].offset)&&(0,internal.Ljt)(text1,"x",text1_x_value),4&dirty&&(0,internal.Ljt)(text1,"y",ctx[2]),2&dirty&&text1_style_value!==(text1_style_value=`text-anchor: ${ctx[1].axisAnnotationConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`)&&(0,internal.Ljt)(text1,"style",text1_style_value)},i:internal.ZTd,o:internal.ZTd,d(detaching){detaching&&(0,internal.ogt)(g)}}}function AxisAnnotation_svelte_instance($$self,$$props,$$invalidate){let bottomLabelOffset,{annotation}=$$props,{drawConfiguration}=$$props;return $$self.$$set=$$props=>{"annotation"in $$props&&$$invalidate(0,annotation=$$props.annotation),"drawConfiguration"in $$props&&$$invalidate(1,drawConfiguration=$$props.drawConfiguration)},$$self.$$.update=()=>{2&$$self.$$.dirty&&$$invalidate(2,bottomLabelOffset=2*drawConfiguration.axisAnnotationConfiguration.margin+drawConfiguration.axisHeight+drawConfiguration.fontSize)},[annotation,drawConfiguration,bottomLabelOffset]}class AxisAnnotation extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,AxisAnnotation_svelte_instance,AxisAnnotation_svelte_create_fragment,internal.N8,{annotation:0,drawConfiguration:1})}}const AxisAnnotation_svelte=AxisAnnotation;function AxisAnnotations_svelte_get_each_context(ctx,list,i){const child_ctx=ctx.slice();return child_ctx[4]=list[i],child_ctx}function create_if_block(ctx){let axisannotation,current;return axisannotation=new AxisAnnotation_svelte({props:{annotation:ctx[4],drawConfiguration:ctx[0]}}),{c(){(0,internal.YCL)(axisannotation.$$.fragment)},m(target,anchor){(0,internal.yef)(axisannotation,target,anchor),current=!0},p(ctx,dirty){const axisannotation_changes={};4&dirty&&(axisannotation_changes.annotation=ctx[4]),1&dirty&&(axisannotation_changes.drawConfiguration=ctx[0]),axisannotation.$set(axisannotation_changes)},i(local){current||((0,internal.Ui)(axisannotation.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(axisannotation.$$.fragment,local),current=!1},d(detaching){(0,internal.vpE)(axisannotation,detaching)}}}function AxisAnnotations_svelte_create_each_block(ctx){let if_block_anchor,current,if_block=ctx[4].show&&create_if_block(ctx);return{c(){if_block&&if_block.c(),if_block_anchor=(0,internal.cSb)()},m(target,anchor){if_block&&if_block.m(target,anchor),(0,internal.$Tr)(target,if_block_anchor,anchor),current=!0},p(ctx,dirty){ctx[4].show?if_block?(if_block.p(ctx,dirty),4&dirty&&(0,internal.Ui)(if_block,1)):(if_block=create_if_block(ctx),if_block.c(),(0,internal.Ui)(if_block,1),if_block.m(if_block_anchor.parentNode,if_block_anchor)):if_block&&((0,internal.dvw)(),(0,internal.etI)(if_block,1,1,(()=>{if_block=null})),(0,internal.gbL)())},i(local){current||((0,internal.Ui)(if_block),current=!0)},o(local){(0,internal.etI)(if_block),current=!1},d(detaching){if_block&&if_block.d(detaching),detaching&&(0,internal.ogt)(if_block_anchor)}}}function AxisAnnotations_svelte_create_fragment(ctx){let g,g_transform_value,current,each_value=ctx[2],each_blocks=[];for(let i=0;i<each_value.length;i+=1)each_blocks[i]=AxisAnnotations_svelte_create_each_block(AxisAnnotations_svelte_get_each_context(ctx,each_value,i));const out=i=>(0,internal.etI)(each_blocks[i],1,1,(()=>{each_blocks[i]=null}));return{c(){g=(0,internal.bi5)("g");for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].c();(0,internal.Ljt)(g,"id","annotation-group"),(0,internal.Ljt)(g,"transform",g_transform_value=`translate(0, ${ctx[1]+ctx[0].axisAnnotationConfiguration.margin+ctx[0].fontSize})`)},m(target,anchor){(0,internal.$Tr)(target,g,anchor);for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].m(g,null);current=!0},p(ctx,[dirty]){if(5&dirty){let i;for(each_value=ctx[2],i=0;i<each_value.length;i+=1){const child_ctx=AxisAnnotations_svelte_get_each_context(ctx,each_value,i);each_blocks[i]?(each_blocks[i].p(child_ctx,dirty),(0,internal.Ui)(each_blocks[i],1)):(each_blocks[i]=AxisAnnotations_svelte_create_each_block(child_ctx),each_blocks[i].c(),(0,internal.Ui)(each_blocks[i],1),each_blocks[i].m(g,null))}for((0,internal.dvw)(),i=each_value.length;i<each_blocks.length;i+=1)out(i);(0,internal.gbL)()}(!current||3&dirty&&g_transform_value!==(g_transform_value=`translate(0, ${ctx[1]+ctx[0].axisAnnotationConfiguration.margin+ctx[0].fontSize})`))&&(0,internal.Ljt)(g,"transform",g_transform_value)},i(local){if(!current){for(let i=0;i<each_value.length;i+=1)(0,internal.Ui)(each_blocks[i]);current=!0}},o(local){each_blocks=each_blocks.filter(Boolean);for(let i=0;i<each_blocks.length;i+=1)(0,internal.etI)(each_blocks[i]);current=!1},d(detaching){detaching&&(0,internal.ogt)(g),(0,internal.RMB)(each_blocks,detaching)}}}function AxisAnnotations_svelte_instance($$self,$$props,$$invalidate){let annotations,{drawConfiguration}=$$props,{data}=$$props,{topOffset}=$$props;return $$self.$$set=$$props=>{"drawConfiguration"in $$props&&$$invalidate(0,drawConfiguration=$$props.drawConfiguration),"data"in $$props&&$$invalidate(3,data=$$props.data),"topOffset"in $$props&&$$invalidate(1,topOffset=$$props.topOffset)},$$self.$$.update=()=>{9&$$self.$$.dirty&&$$invalidate(2,annotations=data.axes.map(((value,index)=>{if(value.data.length>0&&"string"!=typeof value.data[0]){const numberData=value.data;return{show:!0,min:Math.min(...numberData),max:Math.max(...numberData),offset:index*drawConfiguration.axesSpacing}}return{show:!1,min:0,max:0,offset:index*drawConfiguration.axesSpacing}})))},[drawConfiguration,topOffset,annotations,data]}class AxisAnnotations extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,AxisAnnotations_svelte_instance,AxisAnnotations_svelte_create_fragment,internal.N8,{drawConfiguration:0,data:3,topOffset:1})}}const AxisAnnotations_svelte=AxisAnnotations;function AxisLabel_svelte_create_fragment(ctx){let g,text_1,t,text_1_x_value,text_1_style_value,t_value=ctx[0].name+"";return{c(){g=(0,internal.bi5)("g"),text_1=(0,internal.bi5)("text"),t=(0,internal.fLW)(t_value),(0,internal.Ljt)(text_1,"x",text_1_x_value=ctx[0].offset),(0,internal.Ljt)(text_1,"y","0"),(0,internal.Ljt)(text_1,"style",text_1_style_value=`text-anchor: ${ctx[1].axisLabelConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`)},m(target,anchor){(0,internal.$Tr)(target,g,anchor),(0,internal.R3I)(g,text_1),(0,internal.R3I)(text_1,t)},p(ctx,[dirty]){1&dirty&&t_value!==(t_value=ctx[0].name+"")&&(0,internal.rTO)(t,t_value),1&dirty&&text_1_x_value!==(text_1_x_value=ctx[0].offset)&&(0,internal.Ljt)(text_1,"x",text_1_x_value),2&dirty&&text_1_style_value!==(text_1_style_value=`text-anchor: ${ctx[1].axisLabelConfiguration.textAnchor}; font-size: ${ctx[1].fontSize}px;`)&&(0,internal.Ljt)(text_1,"style",text_1_style_value)},i:internal.ZTd,o:internal.ZTd,d(detaching){detaching&&(0,internal.ogt)(g)}}}function AxisLabel_svelte_instance($$self,$$props,$$invalidate){let{axis}=$$props,{drawConfiguration}=$$props;return $$self.$$set=$$props=>{"axis"in $$props&&$$invalidate(0,axis=$$props.axis),"drawConfiguration"in $$props&&$$invalidate(1,drawConfiguration=$$props.drawConfiguration)},[axis,drawConfiguration]}class AxisLabel extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,AxisLabel_svelte_instance,AxisLabel_svelte_create_fragment,internal.N8,{axis:0,drawConfiguration:1})}}const AxisLabel_svelte=AxisLabel;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var TopBottomPosition,DrawConfiguration=function DrawConfiguration(){_classCallCheck(this,DrawConfiguration),this.axesSpacing=100,this.axisHeight=100,this.axisLabelConfiguration=new AxisLabelConfiguration,this.axisAnnotationConfiguration=new AxisAnnotationConfiguration,this.margin={left:20,right:20,top:20,bottom:20},this.fontSize=12},AxisLabelConfiguration=function AxisLabelConfiguration(){_classCallCheck(this,AxisLabelConfiguration),this.show=!0,this.textAnchor="middle",this.axisLabelPosition=TopBottomPosition.ABOVE,this.margin=5},AxisAnnotationConfiguration=function AxisAnnotationConfiguration(){_classCallCheck(this,AxisAnnotationConfiguration),this.show=!0,this.textAnchor="middle",this.margin=5};function AxisLabels_svelte_get_each_context(ctx,list,i){const child_ctx=ctx.slice();return child_ctx[4]=list[i],child_ctx}function AxisLabels_svelte_create_each_block(ctx){let axislabel,current;return axislabel=new AxisLabel_svelte({props:{axis:ctx[4],drawConfiguration:ctx[0]}}),{c(){(0,internal.YCL)(axislabel.$$.fragment)},m(target,anchor){(0,internal.yef)(axislabel,target,anchor),current=!0},p(ctx,dirty){const axislabel_changes={};4&dirty&&(axislabel_changes.axis=ctx[4]),1&dirty&&(axislabel_changes.drawConfiguration=ctx[0]),axislabel.$set(axislabel_changes)},i(local){current||((0,internal.Ui)(axislabel.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(axislabel.$$.fragment,local),current=!1},d(detaching){(0,internal.vpE)(axislabel,detaching)}}}function AxisLabels_svelte_create_fragment(ctx){let g,g_transform_value,current,each_value=ctx[2],each_blocks=[];for(let i=0;i<each_value.length;i+=1)each_blocks[i]=AxisLabels_svelte_create_each_block(AxisLabels_svelte_get_each_context(ctx,each_value,i));const out=i=>(0,internal.etI)(each_blocks[i],1,1,(()=>{each_blocks[i]=null}));return{c(){g=(0,internal.bi5)("g");for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].c();(0,internal.Ljt)(g,"id","label-group"),(0,internal.Ljt)(g,"transform",g_transform_value=`translate(0, ${ctx[0].axisLabelConfiguration.axisLabelPosition===TopBottomPosition.ABOVE?ctx[0].axisLabelConfiguration.margin+ctx[0].fontSize:ctx[1]-ctx[0].axisLabelConfiguration.margin-ctx[0].margin.bottom-ctx[0].margin.top})`)},m(target,anchor){(0,internal.$Tr)(target,g,anchor);for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].m(g,null);current=!0},p(ctx,[dirty]){if(5&dirty){let i;for(each_value=ctx[2],i=0;i<each_value.length;i+=1){const child_ctx=AxisLabels_svelte_get_each_context(ctx,each_value,i);each_blocks[i]?(each_blocks[i].p(child_ctx,dirty),(0,internal.Ui)(each_blocks[i],1)):(each_blocks[i]=AxisLabels_svelte_create_each_block(child_ctx),each_blocks[i].c(),(0,internal.Ui)(each_blocks[i],1),each_blocks[i].m(g,null))}for((0,internal.dvw)(),i=each_value.length;i<each_blocks.length;i+=1)out(i);(0,internal.gbL)()}(!current||3&dirty&&g_transform_value!==(g_transform_value=`translate(0, ${ctx[0].axisLabelConfiguration.axisLabelPosition===TopBottomPosition.ABOVE?ctx[0].axisLabelConfiguration.margin+ctx[0].fontSize:ctx[1]-ctx[0].axisLabelConfiguration.margin-ctx[0].margin.bottom-ctx[0].margin.top})`))&&(0,internal.Ljt)(g,"transform",g_transform_value)},i(local){if(!current){for(let i=0;i<each_value.length;i+=1)(0,internal.Ui)(each_blocks[i]);current=!0}},o(local){each_blocks=each_blocks.filter(Boolean);for(let i=0;i<each_blocks.length;i+=1)(0,internal.etI)(each_blocks[i]);current=!1},d(detaching){detaching&&(0,internal.ogt)(g),(0,internal.RMB)(each_blocks,detaching)}}}function AxisLabels_svelte_instance($$self,$$props,$$invalidate){let axes,{drawConfiguration}=$$props,{data}=$$props,{totalHeight}=$$props;return $$self.$$set=$$props=>{"drawConfiguration"in $$props&&$$invalidate(0,drawConfiguration=$$props.drawConfiguration),"data"in $$props&&$$invalidate(3,data=$$props.data),"totalHeight"in $$props&&$$invalidate(1,totalHeight=$$props.totalHeight)},$$self.$$.update=()=>{9&$$self.$$.dirty&&$$invalidate(2,axes=data.axes.map(((value,index)=>({name:value.name,offset:index*drawConfiguration.axesSpacing}))))},[drawConfiguration,totalHeight,axes,data]}!function(TopBottomPosition){TopBottomPosition[TopBottomPosition.ABOVE=0]="ABOVE",TopBottomPosition[TopBottomPosition.BELOW=1]="BELOW"}(TopBottomPosition||(TopBottomPosition={}));class AxisLabels extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,AxisLabels_svelte_instance,AxisLabels_svelte_create_fragment,internal.N8,{drawConfiguration:0,data:3,totalHeight:1})}}const AxisLabels_svelte=AxisLabels;function create_if_block_1(ctx){let axislabels,current;return axislabels=new AxisLabels_svelte({props:{data:ctx[1],drawConfiguration:ctx[0],totalHeight:ctx[3]}}),{c(){(0,internal.YCL)(axislabels.$$.fragment)},m(target,anchor){(0,internal.yef)(axislabels,target,anchor),current=!0},p(ctx,dirty){const axislabels_changes={};2&dirty&&(axislabels_changes.data=ctx[1]),1&dirty&&(axislabels_changes.drawConfiguration=ctx[0]),8&dirty&&(axislabels_changes.totalHeight=ctx[3]),axislabels.$set(axislabels_changes)},i(local){current||((0,internal.Ui)(axislabels.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(axislabels.$$.fragment,local),current=!1},d(detaching){(0,internal.vpE)(axislabels,detaching)}}}function PC_svelte_create_if_block(ctx){let axisannotations,current;return axisannotations=new AxisAnnotations_svelte({props:{data:ctx[1],drawConfiguration:ctx[0],topOffset:ctx[5]}}),{c(){(0,internal.YCL)(axisannotations.$$.fragment)},m(target,anchor){(0,internal.yef)(axisannotations,target,anchor),current=!0},p(ctx,dirty){const axisannotations_changes={};2&dirty&&(axisannotations_changes.data=ctx[1]),1&dirty&&(axisannotations_changes.drawConfiguration=ctx[0]),32&dirty&&(axisannotations_changes.topOffset=ctx[5]),axisannotations.$set(axisannotations_changes)},i(local){current||((0,internal.Ui)(axisannotations.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(axisannotations.$$.fragment,local),current=!1},d(detaching){(0,internal.vpE)(axisannotations,detaching)}}}function PC_svelte_create_fragment(ctx){let main,svg,g1,if_block0_anchor,g0,axes,g0_transform_value,g1_transform_value,current,if_block0=ctx[0].axisLabelConfiguration.show&&create_if_block_1(ctx),if_block1=ctx[0].axisAnnotationConfiguration.show&&PC_svelte_create_if_block(ctx);return axes=new Axes_svelte({props:{drawConfiguration:ctx[0],data:ctx[1]}}),{c(){main=(0,internal.bGB)("main"),svg=(0,internal.bi5)("svg"),g1=(0,internal.bi5)("g"),if_block0&&if_block0.c(),if_block0_anchor=(0,internal.cSb)(),if_block1&&if_block1.c(),g0=(0,internal.bi5)("g"),(0,internal.YCL)(axes.$$.fragment),(0,internal.Ljt)(g0,"id","chart-group"),(0,internal.Ljt)(g0,"transform",g0_transform_value=`translate(0, ${ctx[5]+ctx[2]/2})`),(0,internal.Ljt)(g1,"id","main-group"),(0,internal.Ljt)(g1,"transform",g1_transform_value=`translate(${ctx[0].margin.left}, ${ctx[0].margin.top})`),(0,internal.Ljt)(svg,"width",ctx[4]),(0,internal.Ljt)(svg,"height",ctx[3])},m(target,anchor){(0,internal.$Tr)(target,main,anchor),(0,internal.R3I)(main,svg),(0,internal.R3I)(svg,g1),if_block0&&if_block0.m(g1,null),(0,internal.R3I)(g1,if_block0_anchor),if_block1&&if_block1.m(g1,null),(0,internal.R3I)(g1,g0),(0,internal.yef)(axes,g0,null),current=!0},p(ctx,[dirty]){ctx[0].axisLabelConfiguration.show?if_block0?(if_block0.p(ctx,dirty),1&dirty&&(0,internal.Ui)(if_block0,1)):(if_block0=create_if_block_1(ctx),if_block0.c(),(0,internal.Ui)(if_block0,1),if_block0.m(g1,if_block0_anchor)):if_block0&&((0,internal.dvw)(),(0,internal.etI)(if_block0,1,1,(()=>{if_block0=null})),(0,internal.gbL)()),ctx[0].axisAnnotationConfiguration.show?if_block1?(if_block1.p(ctx,dirty),1&dirty&&(0,internal.Ui)(if_block1,1)):(if_block1=PC_svelte_create_if_block(ctx),if_block1.c(),(0,internal.Ui)(if_block1,1),if_block1.m(g1,g0)):if_block1&&((0,internal.dvw)(),(0,internal.etI)(if_block1,1,1,(()=>{if_block1=null})),(0,internal.gbL)());const axes_changes={};1&dirty&&(axes_changes.drawConfiguration=ctx[0]),2&dirty&&(axes_changes.data=ctx[1]),axes.$set(axes_changes),(!current||36&dirty&&g0_transform_value!==(g0_transform_value=`translate(0, ${ctx[5]+ctx[2]/2})`))&&(0,internal.Ljt)(g0,"transform",g0_transform_value),(!current||1&dirty&&g1_transform_value!==(g1_transform_value=`translate(${ctx[0].margin.left}, ${ctx[0].margin.top})`))&&(0,internal.Ljt)(g1,"transform",g1_transform_value),(!current||16&dirty)&&(0,internal.Ljt)(svg,"width",ctx[4]),(!current||8&dirty)&&(0,internal.Ljt)(svg,"height",ctx[3])},i(local){current||((0,internal.Ui)(if_block0),(0,internal.Ui)(if_block1),(0,internal.Ui)(axes.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(if_block0),(0,internal.etI)(if_block1),(0,internal.etI)(axes.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.ogt)(main),if_block0&&if_block0.d(),if_block1&&if_block1.d(),(0,internal.vpE)(axes)}}}function PC_svelte_instance($$self,$$props,$$invalidate){let axisLabelHeight,axisLabelTopOffset,axisAnnotationHeight,width,height,{drawConfiguration=new DrawConfiguration}=$$props,{data}=$$props;return $$self.$$set=$$props=>{"drawConfiguration"in $$props&&$$invalidate(0,drawConfiguration=$$props.drawConfiguration),"data"in $$props&&$$invalidate(1,data=$$props.data)},$$self.$$.update=()=>{1&$$self.$$.dirty&&$$invalidate(6,axisLabelHeight=drawConfiguration.axisLabelConfiguration.show?2*drawConfiguration.axisLabelConfiguration.margin+drawConfiguration.fontSize:0),65&$$self.$$.dirty&&$$invalidate(5,axisLabelTopOffset=drawConfiguration.axisLabelConfiguration.axisLabelPosition===TopBottomPosition.ABOVE?axisLabelHeight:0),1&$$self.$$.dirty&&$$invalidate(2,axisAnnotationHeight=drawConfiguration.axisAnnotationConfiguration.show?4*drawConfiguration.axisAnnotationConfiguration.margin+2*drawConfiguration.fontSize:0),3&$$self.$$.dirty&&$$invalidate(4,width=(data.axes.length-1)*drawConfiguration.axesSpacing+drawConfiguration.margin.left+drawConfiguration.margin.right),69&$$self.$$.dirty&&$$invalidate(3,height=drawConfiguration.axisHeight+drawConfiguration.margin.top+drawConfiguration.margin.bottom+axisLabelHeight+axisAnnotationHeight)},[drawConfiguration,data,axisAnnotationHeight,height,width,axisLabelTopOffset,axisLabelHeight]}class PC extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,PC_svelte_instance,PC_svelte_create_fragment,internal.N8,{drawConfiguration:0,data:1})}}const PC_svelte=PC;var GitHub=__webpack_require__(4451);function add_css(target){(0,internal.qOq)(target,"svelte-16mavq0",'.content.svelte-16mavq0{display:flex;flex-direction:column;font-family:"SF Pro Text", "Myriad Set Pro", "SF Pro Icons",\n      "Helvetica Neue", Helvetica, Arial, sans-serif}.row-content.svelte-16mavq0{display:flex;align-items:center}.head.svelte-16mavq0{display:flex;align-items:center;justify-content:space-between}.github-button.svelte-16mavq0{display:flex;align-items:center;height:2em;margin:1em;padding:0.5em;border:1px solid black;border-radius:5px}.github-button.svelte-16mavq0:active{background-color:#eee}img.svelte-16mavq0{height:100%;padding-right:0.5em}button.svelte-16mavq0{font-family:inherit;font-size:100%;line-height:1.15;margin:0;background-color:transparent;text-transform:none;border:none;overflow:visible;-webkit-appearance:button}button.svelte-16mavq0:active{color:inherit}.chart-div.svelte-16mavq0{border:1px solid black;display:inline-block}.main-div.svelte-16mavq0{display:flex;align-items:flex-start;align-content:flex-start}')}function PCDemo_svelte_create_fragment(ctx){let main,div2,div0,t1,button,img,img_src_value,t2,div1,t4,div4,div3,pc,current,mounted,dispose;return pc=new PC_svelte({props:{data:ctx[1],drawConfiguration:ctx[0]}}),{c(){main=(0,internal.bGB)("main"),div2=(0,internal.bGB)("div"),div0=(0,internal.bGB)("div"),div0.innerHTML="<h3>Missing Coordinate Default View</h3>",t1=(0,internal.DhX)(),button=(0,internal.bGB)("button"),img=(0,internal.bGB)("img"),t2=(0,internal.DhX)(),div1=(0,internal.bGB)("div"),div1.textContent="View on GitHub",t4=(0,internal.DhX)(),div4=(0,internal.bGB)("div"),div3=(0,internal.bGB)("div"),(0,internal.YCL)(pc.$$.fragment),(0,internal.Ljt)(div0,"class","row-content svelte-16mavq0"),(0,internal.Jn4)(img.src,img_src_value=GitHub)||(0,internal.Ljt)(img,"src",img_src_value),(0,internal.Ljt)(img,"alt","github mark"),(0,internal.Ljt)(img,"class","svelte-16mavq0"),(0,internal.Ljt)(button,"class","github-button svelte-16mavq0"),(0,internal.Ljt)(div2,"class","head svelte-16mavq0"),(0,internal.Ljt)(div3,"class","chart-div svelte-16mavq0"),(0,internal.Ljt)(div4,"class","main-div svelte-16mavq0"),(0,internal.Ljt)(main,"class","content svelte-16mavq0")},m(target,anchor){(0,internal.$Tr)(target,main,anchor),(0,internal.R3I)(main,div2),(0,internal.R3I)(div2,div0),(0,internal.R3I)(div2,t1),(0,internal.R3I)(div2,button),(0,internal.R3I)(button,img),(0,internal.R3I)(button,t2),(0,internal.R3I)(button,div1),(0,internal.R3I)(main,t4),(0,internal.R3I)(main,div4),(0,internal.R3I)(div4,div3),(0,internal.yef)(pc,div3,null),current=!0,mounted||(dispose=(0,internal.oLt)(button,"click",ctx[2]),mounted=!0)},p(ctx,[dirty]){const pc_changes={};1&dirty&&(pc_changes.drawConfiguration=ctx[0]),pc.$set(pc_changes)},i(local){current||((0,internal.Ui)(pc.$$.fragment,local),current=!0)},o(local){(0,internal.etI)(pc.$$.fragment,local),current=!1},d(detaching){detaching&&(0,internal.ogt)(main),(0,internal.vpE)(pc),mounted=!1,dispose()}}}function PCDemo_svelte_instance($$self,$$props,$$invalidate){let{drawConfiguration}=$$props;return $$self.$$set=$$props=>{"drawConfiguration"in $$props&&$$invalidate(0,drawConfiguration=$$props.drawConfiguration)},[drawConfiguration,{name:"test",axes:[{name:"axis1",data:[.1,.4,.9]},{name:"axis2",data:[.9,.1,.4]},{name:"axis3",data:["bli","bli","bla"]}]},()=>window.open("https://github.com/Sparkier/Missing-Coordinates")]}class PCDemo extends internal.f_C{constructor(options){super(),(0,internal.S1n)(this,options,PCDemo_svelte_instance,PCDemo_svelte_create_fragment,internal.N8,{drawConfiguration:0},add_css)}}const PCDemo_svelte=PCDemo;function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PCDemo_stories={title:"missing-coordinates/PC",component:PCDemo_svelte,argTypes:{}};var Demo=function(_ref){var args=_extends({},_ref);return{Component:PCDemo_svelte,props:args}}.bind({});Demo.args={drawConfiguration:{axesSpacing:100,axisHeight:100,axisLabelConfiguration:{show:!0,textAnchor:"middle",axisLabelPosition:TopBottomPosition.ABOVE,margin:5},axisAnnotationConfiguration:{show:!0,textAnchor:"middle",margin:5},margin:{left:20,right:20,top:20,bottom:20},fontSize:12}}},68870:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./PCDemo.stories.js":83950};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=68870},4451:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/GitHub.d8c6d6c9..png"},53260:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[316],(()=>(__webpack_exec__(47513),__webpack_exec__(68260),__webpack_exec__(30808),__webpack_exec__(38503),__webpack_exec__(29180))));__webpack_require__.O()}]);