<template>
    <div class="container">
      <!-- Angyalok gomb -->
       <div class="angyaldiv">
        <div>
            <router-link to="/angels" class="button angyalok">Angyalok</router-link>
        </div>
       </div>


      <!-- Halandók gomb -->
       <div class="halandodiv">
        <div>
            <router-link to="/halandok" class="button halandok">Halandók</router-link>
        </div>
       </div>
      
      <!-- Démonok gomb -->
       <div class="demondiv">
        <div>
            <router-link to="/demonok" class="button demonok">Démonok</router-link>
        </div>
       </div>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>

    .container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
        }
    .container div{
        margin: 60px;
        font-size: xx-large;
        padding-top: 30%;

    }
    .angyaldiv{
        padding-left: 6%;
    }

    .halandodiv{
        padding-left: 15%;
        padding-right: 15%;
    }
        @keyframes pulsate {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        /* Angyalok gomb */
        .button.angyalok {
            background: linear-gradient(45deg, #ffffff, #a3d5ff);
            color: #000;
            box-shadow: 0 4px 10px rgba(173, 216, 230, 0.8);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            animation: angel-pulse 3s infinite;
            border-radius: 10px;  
        }

        .button.angyalok:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(173, 216, 230, 1);
            cursor: pointer;
        }

        /* Démonok gomb */
        .button.demonok {
            background: linear-gradient(45deg, #8b0000, #ff4500);
            color: #fff;
            box-shadow: 0 4px 10px rgba(139, 0, 0, 0.8);
            text-shadow: 0 0 5px #ff0000;
            animation: demon-flame 2s infinite;
            border-radius: 10px;  
        }

        .button.demonok:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(255, 69, 0, 1);
            cursor: pointer;
        }

        /* Halandók gomb */
        .button.halandok {
            background: linear-gradient(45deg, #8b4513, #a0522d);
            color: #f5deb3;
            box-shadow: 0 4px 10px rgba(139, 69, 19, 0.8);
            animation: mortal-pulse 4s infinite;   
            border-radius: 10px;  
        }

        .button.halandok:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(160, 82, 45, 1);
            cursor: pointer;
        }

        /* Angyalok animáció */
        @keyframes Angyalok {
            0%, 100% {
                box-shadow: 0 4px 10px rgba(173, 216, 230, 0.8);
            }
            50% {
                box-shadow: 0 6px 15px rgba(173, 216, 230, 1);
            }
        }

        /* Démonok animáció */
        @keyframes demon-flame {
            0%, 100% {
                box-shadow: 0 4px 10px rgba(139, 0, 0, 0.8);
            }
            50% {
                box-shadow: 0 6px 15px rgba(255, 69, 0, 1);
            }
        }

        /* Halandók animáció */
        @keyframes mortal-pulse {
            0%, 100% {
                box-shadow: 0 4px 10px rgba(139, 69, 19, 0.8);
            }
            50% {
                box-shadow: 0 6px 15px rgba(160, 82, 45, 1);
            }
        }
</style>