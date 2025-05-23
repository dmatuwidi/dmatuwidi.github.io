export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row text-center justify-center sm:space-x-10 border-t p-5 sm:px-20">
      <p className="text-muted-foreground">&copy; 2025 Damy Matuwidi</p>
      <p className="text-muted-foreground">
        Photo by{" "}
        <a
          href="https://unsplash.com/@lukethornton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="underline"
        >
          Luke Thornton
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/mountains-are-shrouded-in-thick-blue-clouds-nHQFxJT4qOo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="underline"
        >
          Unsplash
        </a>
      </p>
    </footer>
  );
}
