const hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요,
          <br className="hidden lg:inline-block" />
          TodoList 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          목숨이 인간이 대고, 인생을 말이다. 넣는 미인을 청춘에서만 인도하겠다는 뭇 얼음과 있다. 장식하는 웅대한 인류의 심장은 청춘에서만 뼈
          시들어 이상을 것이다. 모래뿐일 주며, 열매를 청춘의 보라. 찬미를 뼈 이상, 그리하였는가? 앞이 들어 그들은 인간의 가는 충분히
          만천하의 그러므로 것이다. 있는 끝까지 남는 불러 자신과 천고에 바이며, 그들에게 뿐이다. 이상, 못하다 기관과 것이다. 기관과 있는
          피어나기 그들의 생생하며, 위하여 이것이다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            TodoList
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Project
          </button>
        </div>
      </div>
    </>
  );
};

export default hero;
