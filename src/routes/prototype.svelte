<script lang="ts">
  import Link from "$components/Link.svelte";
</script>

<h1 class="big-p text-center">Mobile App Prototype</h1>
<h2 class="text-lg 2xl:text-xl font-medium px-2 lg:px-4">
  We recommend playing with our prototype app via Android App for best
  experience, However, if you do not have Android Devices or do not wish to
  install the app. You can try the Web App Version, please note that it is not
  optimized, there may be some bugs and issues.
</h2>
<hr />

<ul class="list-disc pl-8">
  <li>
    <Link
      href="https://github.com/Food-Busters/food_busters/releases/download/1.0.412/food_busters-1.0.412.apk"
    >
      Download APK for Android (Recommended)
    </Link>
  </li>
  <li>
    <Link href="https://food-busters-web.vercel.app">
      Visit Web App Version
    </Link>
  </li>

  <hr class="mr-8 mt-6 mb-5" />

  <li>
    <Link
      href="https://github.com/Food-Busters/food_busters/releases/download/1.0.412/manual-1.0.412.pdf"
    >
      Download Manual
    </Link>
  </li>
  <li>
    <Link
      href="https://github.com/Food-Busters/food_busters"
      title="We never put Virus in our app, I don't even know how to create Virus"
    >
      View Source Code
    </Link>
  </li>
</ul>
