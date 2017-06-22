<template>
    <div>
        <transition appear mode="out-in">
            <div>
                <h4>●ES6常用语法：</h4>

                <h5><span class="o">=></span>  箭头函数</h5>
                <pre>
                    <span class="k">var</span> <span class="p">fn</span> <span class="o">=</span> () <span class="k">=></span> {} <span class="z">// 等于 var fn = function(){}</span>
                    <span class="k">var</span> <span class="p">fn</span> <span class="o">=</span> (<span class="p">a</span>, <span class="p">b</span>) <span class="o">=></span> <span class="p">a</span> <span class="o">+</span> <span class="p">b</span> <span class="z">// 等于 var fn = function(){return a + b;}</span>

                    <span class="z">//正确箭头函数中的this始终指向最外层的vue实例</span>
                    <span class="k">this</span>.<span class="k">axios</span>.<span class="k">get</span>('<span class="p">http://giraffecoming.github.io/vue/static/listData.json</span>')
                        .<span class="k">then</span>((<span class="p">response</span>) <span class="o">=></span> {
                        <span class="k">this</span>.<span class="p">item</span><span class="o">=</span><span class="p">response.data</span>;
                        <span class="k">this</span>.<span class="p">len</span><span class="o">=</span><span class="k">this</span>.<span class="p">item</span>.<span class="p">array</span>.<span class="k">length</span>
                    })
                    .<span class="k">catch</span>((<span class="p">error</span>) <span class="o">=></span> {
                    });

                    <span class="z">//错误 function(){}中this.item指向错误</span>
                    <span class="k">this</span>.<span class="k">axios</span>.<span class="k">get</span>('<span class="p">http://giraffecoming.github.io/vue/static/listData.json</span>')
                        .<span class="k">then</span>(<span class="k">function</span> (<span class="p">response</span>) {
                        <span class="k">this</span>.<span class="p">item</span><span class="o">=</span><span class="p">response.data</span>;
                        <span class="k">this</span>.<span class="p">len</span><span class="o">=</span><span class="k">this</span>.<span class="p">item</span>.<span class="p">array</span>.<span class="k">length</span>
                    })
                    .<span class="k">catch</span>((<span class="p">error</span>) <span class="o">=></span> {
                    });

                </pre>

                <h5>解构赋值</h5>
                <pre>
                    <span class="k">var</span> {<span class="p">a</span>, <span class="p">d</span>} <span class="o">=</span> {<span class="p">a</span>:<span class="n">1</span> , <span class="p">b</span>: <span class="n">2</span>, <span class="p">c</span>: <span class="n">3</span>, <span class="p">d</span>: <span class="n">4</span>};
                    <span class="k">console</span>.<span class="p">log</span>(<span class="p">a</span>, <span class="p">d</span>) <span class="z">// 1, 4</span>

                    <span class="k">var</span> <span class="p">jsonData</span> <span class="o">=</span> {
                    <span class="p">id</span>: <span class="n">42</span>, <span class="p">status</span>: "<span class="p">OK</span>", <span class="p">data</span>: [<span class="n">867</span>, <span class="n">5309</span>]
                    };
                    <span class="k">let</span> { <span class="p">id</span>, <span class="p">status</span>, <span class="p">data</span>: <span class="p">number</span> } = <span class="p">jsonData</span>;
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">id</span>, <span class="p">status</span>, <span class="p">number</span>);
                    <span class="z">//场景举例：axios请求回数据之后对数据进行提取</span>
                </pre>


                <h5><span class="o">...</span>  (展开运算符)</h5>
                <pre>
                    <span class="z">//数组展开</span>
                    <span class="k">var</span> <span class="p">array</span> <span class="o">=</span> [<span class="n">1</span>, <span class="n">2</span>, <span class="o">...</span>[<span class="n">3</span>, <span class="n">4</span>]];
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">array</span>) <span class="z">// [1, 2, 3, 4]</span>
                    <span class="z">//数组合并</span><!--var array = [1, 2].concat([3, 4]);-->
                    <span class="k">var</span> <span class="p">array</span> <span class="o">=</span> [<span class="o">...</span>[<span class="n">1</span>, <span class="n">2</span>], <span class="o">...</span>[<span class="n">3</span>, <span class="n">4</span>]];
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">array</span>) <span class="z">// [1, 2, 3, 4]</span>
                    <span class="z">//对象展开</span>
                    <span class="k">var</span> <span class="p">object</span> = {<span class="p">a</span>:<span class="n">1</span> , ...{<span class="p">b</span>: <span class="n">2</span>, <span class="p">c</span>: <span class="n">3</span>}, <span class="p">d</span>: <span class="n">4</span>};
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">object</span>) <span class="z">// {a:1 , b: 2, c: 3, d: 4}</span>
                    <span class="z">//对象合并</span>
                    <span class="k">var</span> <span class="p">objA</span> = {<span class="p">a</span>: <span class="n">1</span> , <span class="p">c</span>: <span class="n">3</span>};
                    <span class="k">var</span> <span class="p">objB</span> = {<span class="p">b</span>: <span class="n">2</span> , <span class="p">c</span>: <span class="n">4</span>};
                    <span class="k">var</span> <span class="p">objAB</span> <span class="o">=</span> {<span class="o">...</span><span class="p">objA</span>, <span class="o">...</span><span class="p">objB</span>}; <span class="z">//  {a: 1, b: 2, c: 4}</span>
                    <span class="z">//字符串转数组</span>
                    <span class="k">var</span> <span class="p">str</span> = [<span class="o">...</span>"<span class="p">lkx</span>"];
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">str</span>);
                    <span class="z">//["l","k","x"]</span>

                    <span class="z">//项目中的示例</span>
                    <span class="k">let</span> <span class="p">state</span> <span class="o">=</span> {
                        <span class="p">resultList</span>: [],
                        <span class="p">currentPage</span>: <span class="n">0</span>,
                        <span class="p">totalRows</span>: {}
                    }
                    <span class="k">let</span> <span class="p">data</span> <span class="o">=</span> {
                        <span class="p">resultList</span>: [{<span class="p">new</span>:'<span class="p">new</span>'}],
                        <span class="p">currentPage</span>: <span class="n">2</span>,
                        <span class="p">totalRows</span>: {<span class="p">row</span>:'<span class="p">row</span>'}
                    }
                    <span class="k">let</span> <span class="p">combile</span> <span class="o">=</span> {
                        <span class="o">...</span><span class="p">state</span>,
                        <span class="p">resultList</span>: [
                            <span class="o">...</span><span class="p">state</span>.<span class="p">resultList</span>,
                            <span class="o">...</span><span class="p">data</span>.<span class="p">resultList</span>
                        ],
                        <span class="p">currentPage</span>: <span class="p">data</span>.<span class="p">currentPage</span>,
                        <span class="p">totalRows</span>: <span class="p">data</span>.<span class="p">totalRows</span>
                    }
                    <span class="k">console</span>.<span class="k">log</span>(<span class="p">combile</span>)
                    <span class="z">// {"resultList":[{"new":"new"}],"currentPage":2,"totalRows":{"row":"row"}}</span>

                </pre>


            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                tabs:[
                    {
                        tabContent:'tab01',
                        tabView:''
                    },
                    {
                        tabContent:'tab02'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    pre{
        background: #222;
        color: #fff;
        border-radius: 10px;
        line-height: 24px;
        letter-spacing: 1px;
    }
    h2,h5{
        font-family: "Microsoft YaHei";
    }
    h5{
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    .k{
        color: #66d9ef;
    }
    .p{
        color: #a6e22e;
    }
    .o{
        color: #f92672;
    }
    .n{
        color: #ae81ff;
    }
    .z{
        color: #aaa;
    }


</style>
