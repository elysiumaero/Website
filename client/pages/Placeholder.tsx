interface Props {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            {description ||
              "This page is coming next. Tell Fusion what you want here and we'll craft it together."}
          </p>
        </div>
      </div>
    </section>
  );
}
