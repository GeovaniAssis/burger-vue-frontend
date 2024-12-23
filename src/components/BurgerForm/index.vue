<style src="./BurgerForm.css"></style>

<template>
    <form id="burgerForm" class="row" @submit="createBurger">
        <div class="col-12">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="nomeForm">Nome do cliente:</label>
                    <input type="text" name="nome" id="nomeForm" v-model="nomeIn">
                </div>
            </div>
        </div>
        
        <div class="col-lg-6">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="paoForm">Escolha o pão:</label>
                    <select name="pao" id="paoForm" v-model="paoIn">
                        <option value="" selected disabled></option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="carneForm">Escolha a carne do hamburguer:</label>
                    <select name="carne" id="carneForm" v-model="carneIn">
                        <option value="" selected disabled></option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="col-12">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="opcionaisForm">Selecione os opcionais:</label><br/><br/>

                    <div class="checkboxContainer" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" :id="'opcaoOpcional'+opcional.id" name="opcionais" v-model="opcionalIn" :value="opcional.tipo">
                        <label :for="'opcaoOpcional'+opcional.id">{{ opcional.tipo }}</label>
                    </div>

                </div>
            </div>
        </div>
        
        <div class="col-lg-6">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="bebidaForm">Escolha a bebida:</label>
                    <select name="bebida" id="bebidaForm" v-model="bebidaIn">
                        <option value="" selected disabled></option>
                        <option v-for="bebida in bebidas" :key="bebida.id" :value="bebida.tipo">{{ bebida.tipo }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="blcCol">
                <div class="blcInput">
                    <label for="batatasForm">Escolha o tamanho da batata:</label>
                    <select name="batatas" id="batatasForm" v-model="batataIn">
                        <option value="" selected disabled></option>
                        <option v-for="batata in batatas" :key="batata.id" :value="batata.tipo">{{ batata.tipo }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="col-12">
            <input type="submit" class="btnAmarelo" value="Concluir o pedido">
        </div>
    </form>
    
    <div class="row">
        <div class="col-12" v-show="msg">
            <div class="blcCol">
                <div class="blcInput">
                    <p>{{ msg }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BurgerForm',
        data(){
            return{
                paes: null,
                carnes: null,
                opcionaisdata: null,
                bebidas: null,
                batatas: null,

                nomeIn: null,
                carneIn: null,
                opcionalIn: [],
                bebidaIn: null,
                batataIn: null,
                msg: null
            }
        },
        methods: {
            async getIngredientes() {
                const req = await fetch("https://burgervue.onrender.com/ingredientes");
                const data = await req.json();

                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
                this.bebidas = data.bebidas;
                this.batatas = data.batatas;
            },
            async createBurger(e) {
                e.preventDefault();

                const data = {
                    nome: this.nomeIn,
                    pao: this.paoIn,
                    carne: this.carneIn,
                    opcional: Array.from(this.opcionalIn),
                    bebida: this.bebidaIn,
                    batata: this.batataIn,
                    status: "Solicitado",
                }

                const dataJson = JSON.stringify(data);

                const req = await fetch("https://burgervue.onrender.com/burgers",{
                    method: "POST",
                    headers: { "Content-Type":"application/json" },
                    body: dataJson
                });

                const res = await req.json();

                this.msg = `Pedido Nº.: ${res.id} realizado com sucesso.`;
                setTimeout(() => this.msg = "", 5000);

                this.nomeIn = "";
                this.paoIn = "";
                this.carneIn = "";
                this.opcionalIn = "";
                this.bebidaIn = "";
                this.batataIn = "";

            }
        },
        mounted() {
            this.getIngredientes();
        }
    }
</script>
  