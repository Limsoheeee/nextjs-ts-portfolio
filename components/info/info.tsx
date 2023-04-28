import Link from "next/link";

interface EmailButtonProps {
  to: string;
}

const infomation = () => {
  const handleClick = () => {
    const to = "v_vsoi@naver.com";
    const mailtoLink = `mailto:${to}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <img
          src="https://user-images.githubusercontent.com/113952299/235082721-c466283b-4544-4771-928a-b760252ca021.jpeg"
          alt="project Icon"
          style={{
            marginBottom: "30px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
          안녕하세요,
          <br className="hidden lg:inline-block" />
          invisible한 개발자 '임소희' 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          안녕하세요, 저는 인비저블한 프론트엔드 개발자를 꿈꾸는 임소희입니다.
          저는 간격을 보이지 않게 조용히 이어주는 개발자가 되고 싶습니다. 말이
          먼저가 아닌 행동이 먼저인 사람으로서, 열심히 일하고 결과물을 제공하는
          것을 최우선으로 생각하고 있습니다. 더불어, 저는 함께하는 성장이 더
          가치있다고 생각합니다. 팀원들과 함께 지식을 공유하며 서로 돕는
          과정에서 성장을 경험할 수 있습니다. 또한, 개발자로서는 지속적인 자기
          계발이 중요하다고 생각합니다. 새로운 기술들을 배우고 적용함으로써
          기술적인 경쟁력을 확보할 수 있습니다. 하지만 제가 중요하게 생각하는
          것은 기술 구현뿐만 아니라, 활용 방식을 고민하고 발전시키는 것입니다.
          새로운 기술이 나오면 그것을 어떻게 활용할지 고민하며 다양한 방식으로
          발전시켜 나가는 것이 필요합니다. 이를 통해 더 나은 제품을 제공할 수
          있으며, 기술적인 경쟁력을 갖출 수 있습니다. 이러한 자세로 인비저블한
          프론트엔드 개발자로서 성장하겠습니다. 함께 일하게 된다면, 팀의 목표
          달성을 위해 최선을 다하고, 서로에게 도움이 되는 개발자가 되겠습니다.
          감사합니다.
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href={"project"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Project
            </button>
          </Link>
          <button
            style={{ marginLeft: "10px" }}
            onClick={handleClick}
            className="inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
          >
            Email
          </button>
          <Link legacyBehavior href="https://github.com/Limsoheeee">
          <button
            style={{ marginLeft: "10px" }}
            className="inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
          >
            GitHub
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default infomation;
