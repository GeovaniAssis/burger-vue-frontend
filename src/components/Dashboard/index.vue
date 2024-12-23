<style src="./Dashboard.css"></style>

<template>
    <div class="pedidos container">
        <div class="row">
            <div class="col-12" v-for="burger in burgers" :key="burger.id">
                <div class="blcCol">
                    <div class="blcInput">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Nº.:</b><br/>{{ burger.id}}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Cliente:</b><br/>{{ burger.nome }}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Pão:</b><br/>{{ burger.pao }}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Carne:</b><br/>{{ burger.carne }}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p>
                                    <b>Opcionais:</b><br/><span v-for="(opcional, index) in burger.opcional" :key="index" > + {{ opcional }} </span>
                                </p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Bebida:</b><br/>{{ burger.bebida }}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p><b>Batata:</b><br/>{{ burger.batata }}</p>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12">
                                <p style="border-left: none;">
                                    <b>Ações:</b><br/>*Atualização automatica<br/>
                                    <select name="status" id="status" @change="updateBurger($event, burger.id)">
                                        <option v-for="statu in status" :key="statu.id" :value="statu.tipo" :selected="burger.status==statu.tipo">
                                            {{ statu.tipo }}
                                        </option>
                                    </select><br/>

                                    <button class="btnAmarelo" @click="deleteBurger(burger.id)">Cancelar</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                burgers: null,
                burgerId: null,
                status: []
            }
        },
        methods: {
            async getPedidos() {
                const req = await fetch("https://burgervue.onrender.com/burgers");
                this.burgers = await req.json();

                this.getStatus();
            },
            async getStatus() {
                const req = await fetch("https://burgervue.onrender.com/status");
                this.status = await req.json();
            },
            async deleteBurger(id) {
                const req = await fetch(`https://burgervue.onrender.com/burgers/${id}`, {
                    method: "DELETE"
                });

                this.getPedidos();
            },
            async updateBurger(event, id){
                const option = event.target.value;

                const dataJson = JSON.stringify({ status: option });

                const req = await fetch(`https://burgervue.onrender.com/burgers/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type":"application/json" },
                    body: dataJson
                });
            }
        },
        mounted() {
            this.getPedidos();
        }
    }
</script>
  