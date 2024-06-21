import Card from "./Card.jsx";

const Hobbies = () => {
  return (
    <div className={"full-width-text-box my-5"}>
      <h1 className="title">Hobbies</h1>
      <ul
        className={
          "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4"
        }
      >
        <Card
          img={"./hobby1.JPG"}
          alt={
            "A sunny day at Alpine Meadows (now Palisades), Lake Tahoe, California, featuring snowy slopes, pine trees, and chairlifts under a striking blue sky with streaky clouds."
          }
          description={
            "I enjoy the mountains, specifically skiing and hiking. I have been on skis since I was a wee little lad and have been skiing ever since. There is nothing quite like the feeling of gliding down a mountain on a pair of skis."
          }
        />
        <Card
          img={"./hobby2.JPG"}
          alt={
            "A gaming setup with three monitors displaying mountain landscapes, flanked by Mario-themed posters and a framed motivational quote, showcasing a desk with a gaming keyboard, mouse, and visible PC components."
          }
          description={
            "I grew up playing video games and building computers. Whilst I do not have the time to play or upgrade my computer as much as I used to, I still keep in contact with many friends I met over the years through the communities."
          }
        />
        <Card
          img={"./hobby3.jpg"}
          alt={
            " The Golden State Warriors celebrate their 2022 NBA championship. Pictured left to right: Andre Iguodala, Stephen Curry, Draymond Green, and Klay Thompson."
          }
          description={
            "I enjoy watching the NBA, specifically the Golden State Warriors. I also enjoy occasionally playing basketball in my spare time. I also enjoy discussing the overall NBA league with friends and family."
          }
        />
      </ul>
    </div>
  );
};

export default Hobbies;
