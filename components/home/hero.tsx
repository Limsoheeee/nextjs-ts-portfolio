import Link from "next/link";

const hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
          welcome! 
          <br className="hidden lg:inline-block" />
          'Lim sohee' web portfolio!
        </h1>
        <p className="mb-8 leading-relaxed">
        이 홈페이지는 Next.js와 Typescript를 기반으로 만들어졌습니다.
        infomtion과 project페이지를 통해 저의 간단한 정보와 프로젝트 작업물을 보실수있습니다. 
        infomation을 통해 저의 email, github, resume를 확인 할 수 있습니다.
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href={"info"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Infomation
            </button>
          </Link>
          <Link legacyBehavior href={"project"}>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Project
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default hero;
