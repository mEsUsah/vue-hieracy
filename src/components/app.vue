<template>
    <header>
        <h1>Connected nodes</h1>
    </header>
    <main id="main-container">
            <node-card v-for="node in nodes" :key="node.id"
                :node="node">
            </node-card>
    </main>
</template>
<script>
export default {
    data() {
        return {
            nodes: [
                {
                    id: 1,
                    name: 'first',
                    type: 'machine',
                    children: [
                        {
                            id: 2,
                            position: 'e',
                            name: 'second',
                            type: 'pipe',
                            children: [
                                {
                                    id: 3,
                                    position: 'e',
                                    name: 'Tee',
                                    type: 't',
                                    children: [
                                        {
                                            id: 4,
                                            position: 'e',
                                            type: 'pipe',
                                            name: 'fifth',
                                            children: [
                                                {
                                                    id: 5,
                                                    position: 'e',
                                                    name: 'sixth',
                                                    type: 'equipment',
                                                    children: null
                                                },
                                            ]
                                        },
                                        {
                                            id: 6,
                                            position: 's',
                                            type: 'pipe',
                                            name: 'seventh',
                                            children: [
                                                {
                                                    id: 7,
                                                    position: 's',
                                                    type: 'equipment',
                                                    name: 'eight',
                                                    children: null
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id: 8,
                            position: 's',
                            name: 'third',
                            type: 'pipe',
                            children: [
                                {
                                    id: 9,
                                    position: 's',
                                    type: 'equipment',
                                    name: 'forth',
                                    children: null
                                },
                            ]
                        },
                    ]
                },
                
            ]
        }
    },
    provide(){
        return{
            nodes: this.nodes
        }
    }
}
</script>

<style>
    body{
        background-color: rgb(73, 73, 73);
        margin: 0;
        padding: 0;
        font-family: monospace;
    }
    header{
        background-color: black;
        height: 100px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
    header h1{
        margin: 0;
        color: #ff9800;
        font-size: 40px;
        line-height: 40px;
        padding-left: 20px;
    }
    main{
        padding: 20px;
        position: relative;
        overflow: scroll;
        height: calc(100vh - 140px);



    }
</style>