<template>
  <div class="forLoading">
    <div class="spin"></div>

    <h1 id="mainAnimation">Loading...</h1>

    <div class="spin"></div>
  </div>
</template>

<style scoped>
/* Spinner animate */
.spin {
  display: block;
  min-width: 40px;
  width: 40px;
  max-width: 40px;
  min-height: 40px;
  height: 40px;
  max-width: 40px;
  border: 3px solid rgba(0, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}

/* Text animate */
#mainAnimation {
  background: linear-gradient(
    90deg,
    black,
    red,
    darkred,
    yellow,
    yellowgreen,
    lightblue,
    aqua,
    blue,
    darkblue,
    lightpink,
    pink
  );
  background-size: 400%;
  font-size: 30px;
  font-family: sans-serif;
  letter-spacing: normal;
  font-weight: 600;
  word-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

/* Main styles */
.forLoading {
  width: 280px;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
}
</style>