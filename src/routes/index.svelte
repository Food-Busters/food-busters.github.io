<script>
  import Link from "$components/Link.svelte";
</script>

<h1>Food Busters Links</h1>
<hr />

<ul class="list-disc pl-8">
  <li><a href="/prototype">Mobile App Prototype</a></li>
  <li>
    <Link
      href="https://food-busters-classifier.vercel.app/"
      title="Demo Model via Webcam"
    >
      Try Sample Smart Food Scanner
    </Link>
  </li>
  <li>
    <Link href="https://food-waste-quotes.vercel.app/">
      Food Waste Quotes Generator
    </Link>
  </li>
  <li>
    <Link href="https://github.com/Food-Busters">
      Food Busters GitHub Homepage
    </Link>
  </li>
</ul>
