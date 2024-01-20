<script>
  let isVideoPlaying = false;

  // Define an array of video sources for each reel
  const videoSources = [
    [
      'https://texbab.fly.dev/api/files/vi08f0m1bznkfa3/dnl8lr6e29wbopb/dd55312c_dc42_4985_afc1_00adb30ec2ce_vcT8TKvfPw.mp4?token=',
    ],
    [
      'https://texbab.fly.dev/api/files/vi08f0m1bznkfa3/v4tl3oitsh98qk4/3ea5cc0d_09c9_4d65_ab5f_d6e5915a6dbe_bVx8pKE2Gk.mp4?token=',
    ],
    [
      'https://texbab.fly.dev/api/files/vi08f0m1bznkfa3/mc4dyxctpid7uyh/a98f6c01_3980_45aa_b084_14b14cc1d883_BKVHvszZqm.mp4?token=',
    ],
  ];

  function playVideo(reel) {
    isVideoPlaying = true;

    // Get the video element
    const videoElement = document.getElementById(`showreels-video${reel}`);

    // Check if Fullscreen API is supported
    if (document.fullscreenEnabled) {
      // Request fullscreen
      videoElement.requestFullscreen();
    }
  }

  function stopVideo(reel) {
    isVideoPlaying = false;

    // Get the video element
    const videoElement = document.getElementById(`showreels-video${reel}`);

    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }

    // Pause the video
    videoElement.pause();
  }
</script>

<div class='flex flex-col items-center justify-center min-h-screen from-gray-130 via-gray-30 to-gray-50 bg-gradient-to-br'>
  <h2>🍲 Klikk på meg 🔖😊</h2>
  {#each [0, 1, 2] as reel}
    <div class="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8" key={reel}>
      <div class="relative">
        <!-- Showreels starts -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="showreels-div" on:click={() => playVideo(reel)}>
          <video id={`showreels-video${reel}`} class="showreels-video" loop autoplay muted>
            {#each videoSources[reel] as source}
              <source src={source} type="video/mp4" />
            {/each}
          </video>
        </div>
      </div>
      {#if isVideoPlaying}
        <div class="absolute-center">
          <button on:click={() => stopVideo(reel)}>Spille Video</button>
        </div>
      {/if}
    </div>
  {/each}
</div>
<!-- if u want horizontal layout 
Removed the mb-8 margin class from the reel container.
Wrapped the reel containers in a flex container with space-x-4 class for horizontal spacing.
Adjusted the width of each reel container to w-1/3 for equal horizontal distribution.-->
<style>
  .showreels-div {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    animation: bubbleAnimation 1s infinite alternate;
  }

  @keyframes bubbleAnimation {
    from {
      transform: scale(1.3);
    }
    to {
      transform: scale(1.1);
    }
  }

  .showreels-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
