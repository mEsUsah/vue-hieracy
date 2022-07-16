<template>
    <div v-if="!hasChildren" class="node" :class="nodePosition()">
        <h3>{{ node.name }}</h3>
        <p>{{ node.type }} - {{ node.id }}</p>
    </div>
    
    <div v-if="hasChildren" class="node" :class="nodePosition()" @mouseover.self="toggleFreePos()">
        <h3>{{ node.name }}</h3>
        <p>{{ node.type }} - {{ node.id }}</p>
        <node-card v-for="node in getChildren" 
            :key="node.id"
            :node="node">
        </node-card>

        <div v-for="slot in getFreeSlots" 
            class="fleeSlot"
            :class="'freeSlot--' + slot"
            :key="slot">
            <span>+</span>
        </div>
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
            getFreeSlots(){
                console.log('---Free Pos for ID ' + this.node.id + '---');
                let allPos = ['n','s','e','w'];
                let usedPos = [];
                
                // Add parent position to list of used positions
                switch(this.node.position) {
                    case 'n':
                        usedPos.push('s');
                        break;
                    case 's':
                        usedPos.push('n');
                        break;
                    case 'e':
                        usedPos.push('w');
                        break;
                    case 'w':
                        usedPos.push('e');
                        break;
                }

                //Add children to list of used positions
                for(const child of this.getChildren){
                    usedPos.push(child.position);
                }

                // Filter out used positions from list off all possible possitions
                let freePos = allPos.filter(pos => !usedPos.includes(pos));
                 console.log('free', freePos);

                // Don't return list of 
                if(this.node.id === 1){
                    return false;
                }
                
                // Return list of free positions if a tee is not used
                if(freePos.length < 3){
                    return freePos;
                }
                return false;
            }
        },
        methods: {
            nodePosition(){
                if(this.node.position)
                return 'node__position--' + this.node.position;
            },
        },
        inject: ['nodes']
    }
</script>
<style>
    .node{
        background-color: #ff9800;
        position: absolute;
        width: 200px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        color: white;
    }
    .node p{
        color: black;
    }
    .node__position--e{
        right: -220px;
    }
    .node__position--e::before{
        z-index: -1;
        height: 4px;
        background-color: white;
        width: 20px;
        position: absolute;
        top: 50%;
        left: -20px;
        content: "";
    }
    .node__position--n{
        top: -120px;
    }
    .node__position--s{
        bottom: -120px;
    }
    .node__position--s::before{
        z-index: -1;
        height: 20px;
        background-color: white;
        width: 4px;
        position: absolute;
        top: -20px;
        left: 50%;
        content: "";
    }

    .fleeSlot{
        background-color: white;
        position: absolute;
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        color: black;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
    }

    .freeSlot--n{
        top: -20px;
    }
    .freeSlot--s{
        bottom: -20px;
    }
    .freeSlot--e{
        left: -20px;
    }
    .freeSlot--w{
        right: -20px;
    }

</style>