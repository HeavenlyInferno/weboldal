<template>
    <div class="container">
      <!-- Angyalok gomb -->
      <router-link to="/angyalok" class="button angyalok">Angyalok</router-link>

      <!-- Halandók gomb -->
      <router-link to="/halandok" class="button halandok">Halandók</router-link>

      <!-- Démonok gomb -->
      <router-link to="/demonok" class="button demonok">Démonok</router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "./assets/HeavenlyInferno.jpg"
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      };
    }
  }
};
</script>
<style scoped>

    .container {
            position: relative;
            width: 100%;
            height: 100%;
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
            top: 65%; /* Lefele az angyalok lábánál */
            left: 10%; /* Kicsit beljebb balról */
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
            top: 65%; /* Lefele a démonok lábánál */
            left: 75%; /* balról benyomva jobbra (buggol a right) */
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
            top: 82%; /* Kicsit a cím alatt */
            left: 43.5%; /* Pontosan középen */
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