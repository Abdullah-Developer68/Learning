export default function Page({ params }) {
  // throw new Error("This is a client-side error for demonstration purposes.");
  // + and other special characters in the slug can cause issues, so we check against a list of valid slugs.
  let languages = ["Javascript", "python", "ruby", "java", "cpp"];
  if (languages.includes(params.slug)) {
    return <div> My Post: {params.slug} </div>;
  } else {
    return <div> Post not found </div>;
  }
  // params is an object and 'slug' (your chosen name) is a key whose value is an array of path segments

  // case 1: words are written after blogpost/python
  // then {slug: ["python"]} will be passed as params

  // ----- If multiple values are needed, separate them using / and use [...slug] instead of [slug] in the route to capture all segments

  // case 2: words are written after blogpost/python/hello-world
  // then {slug: ["python", "hello-world"]} will be passed as params

  // case 3: words are written after blogpost/python/hello-world/2023
  // then {slug: ["python", "hello-world", "2023"]} will be passed as params
}
