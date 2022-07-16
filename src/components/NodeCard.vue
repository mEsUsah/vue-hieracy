<template>
    <div v-if="!hasChildren" class="node" :class="nodePosition()">
        <h3>{{ node.name }}</h3>
        <p>{{ node.type }}</p>
    </div>
    
    <div v-if="hasChildren" class="node" :class="nodePosition()">
        <h3>{{ node.name }}</h3>
        <p>{{ node.type }}</p>
        <node-card v-for="node in getChildren" 
            :key="node.id"
            :node="node">
        </node-card>
    </div>
</template>

<script>
    export default {
        props: {
            node: {
                type: Object,
                required: true
            }
        },
        computed: {
            hasChildren(){
                const children = this.node.children;
                if(children && children.length){
                    return true;
                }
                return false;
            },
            getChildren(){
                return this.node.children;
            },
            
        },
        methods: {
            nodePosition(){
                console.log(this.node.position);
                if(this.node.position)
                return 'node__position--' + this.node.position;
            }
        },
        inject: ['nodes']
    }
</script>