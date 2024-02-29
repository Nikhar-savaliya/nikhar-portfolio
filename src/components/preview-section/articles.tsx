import { articleData } from "@/lib/articles";
import Article from "@/components/ui/article";

const Preview_Article = () => {
  let size: number = 1;
  return (
    <section className="px-4 mt-24">
      <p className="text-center text-2xl md:text-3xl font-serif my-10">
        📝 Some Articles I wrote about Tech
      </p>
      <>
        {articleData.map((item) => {
          if (size <= 3) {
            size++;
            return (
              <Article
                link={item.link}
                description={item.description}
                time={item.time}
                title={item.title}
                key={item.link}
              />
            );
          }
        })}
      </>
    </section>
  );
};

export default Preview_Article;
