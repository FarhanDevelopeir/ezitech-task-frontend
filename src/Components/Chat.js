import React, { useState } from "react";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);

  const toggle = () => {
    setOpenChat(!openChat);
  };
  return (
    <div
      className={`fixed bottom-32 left-5  `}
    >
      {openChat ? (
        <div className="chatbox  w-[75%] ">
          <div className="w-full transition duration-700 ease-in-out bg-blue-700 rounded-t-lg">
            <div className="flex justify-between w-[90%] py-2 m-auto  text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class=" w-8 m-auto mr-2 mt-1 text-white "
                  fill="currentColor"
                  viewBox="0 0 24 24 "
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-[14px] sm:text-[16px]">
                  Start a Conversation
                </h1>
                <p className="sm:text-[12px] text-[10px] font-semibold">
                  Hi! Click one of our member below to chat on WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="w-full transition duration-700 ease-in-out bg-white rounded-b-lg py-3 pb-7">
            <div className="w-[90%]  m-auto">
              <h1 className="text-xs text-gray-500 pb-3">
                The team typically replies in a few minutes.
              </h1>
              <div className="flex transition duration-700 ease-in-out justify-around rounded hover:shadow-lg bg-gray-200 hover:bg-white cursor-pointer border-l-2 py-2 border-green-700">
                <div className="flex justify-between ">
                  <img
                    className="rounded-full h-10 mr-2"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABAEAABAwMBBAgDBQYEBwAAAAABAAIDBAURBhIhMUEHEyJRYXGBoRQykUJSscHRFSMzQ2JygpKi8CQ1U2Nzg5P/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QAIxEAAwACAQQCAwEAAAAAAAAAAAECAxExBBIhQRNRBTKBIv/aAAwDAQACEQMRAD8AnFERAEREAXmVQ+QDcOKsue53EoC8ZWjhvVt8+BnGAOaoWj1nfjpvT1RdGMjkfE5gbHISBIS4DZyOBQF9+rLJHVClmu9LDUHhFM/q3HyDsLasm6xjXxybbXDIc05BUczak0v0gaYroK5sdPV09O+bqp9nrISB88buY4cORwRvUV6T1hddLVMclHM6SkcR1tHI49W8eA+yfEe6x7jLtPpsSP5EqsSuHHBUSV/SnPaq6lqWxR3Gy18fXRAER1FOc4fG7k4tOdxxndv5mQtPagtmo6H4y1VIljBw9p3Pjd3OHJTtEaZvGytPHcqwc8FiKpri07ipIMpFbZKDx3K4gCIiAIiIAiIgCsSyZ3N4c17M/wCy31KsoD1eIiAeygTpX1eNQ3RtvoHn9nULz2hwnl4Fw8BvA9T3LsOmbVMluoorFQSFlRWM26h7eLIeAAP9RBHkD3hQ9brbWXKfqLbSyTPHJg3N8zwHqtd1o2xOzE9lS/gF21H0bXeVu1U1FLTbvlJMh9cYHuVfn6M6hgA/asR/9B/VV/mheywunyPhHALa6Z1BXaZu8dxoHHLezJET2Zmc2n8jyK3VX0eXWJuaaalqO9u0WE+Wd3uuZr7fWW6bqa6mkp38g8cfI8Ctk5Jp+GYXiuV/pH1PabjTXe10txo3F0FTEJGZ4gHkfEcFlqLOge7ma13CzSHJpZRPF/Y/OR6OBP8AiUpren4KzWmFdjkxuKtIpIMwb0ViJ+Dgq+gCIiAKiV+y1VrGlO0fBAUeaIiAIiICCtTWup1X0nXWny5lPTPYyWUfYjDRjHiSTj1XfWy30lrpGUlDA2GFnIDeT3k8z4r26R26wXK5VdXVQU3x04mc+V4bk7DQBv8ALPqViM1HaJBmOta9vfGx7h9QFy+oqqppcHX6WYmE/ZtVj1fFvqsRmoLPI8Ri5UrXHg2SQMJ9DhZFXIwMbIXt2MZLtoABVu1ouTS3yWli3K30t0pHUtbE2SI9/Fp7weRVh9+tDXFouNO88MRO2z7ZVL9QWqLfNWMjHfI1zR9SFkpteUiXWNrTaNL0bW2o030jm3vcX09VSSdVJjG20EEeo35U0rh9OCkud4oq6mmimFPt7Ekbg4b24IyPT6LuV1cFuo88nD6qFGTS4PERFuK56FkROy3xCxlXG7Zd4FAZKIiApkOGErFV+c7gFYQBERAFbqJephklxnYaT5q4qJoxNE+MnAc0tUVwZTra2RjrClhuUtsuNeNuSnrombzhuw9zQQRw5NXSAkDZBwBuAHJYVdbW1dDVW2s2mh/ZcW/M07iHDxBAIVNP+1YY2xTNpahzRjresczb8S3ZOD6rjU21pvyd1TM1tLwZNbDSz00jbhFFLAGkvErQ4YHHiovGjKeltlvvFRlzXTMlnpXMGy2IuHruBGfVSLPQ1Nf+6uEsIpeL6eFp/eeDnH7PgAM44q/XRskYWPaHMcC1zSNxB3YWU5HHjZj8at7LEMbIGCOFjI2Dg1jQAPoqnBr2lkoBjI7QO8Y8VgQU9bRt6qnnjmpm7o21GRI0d20OPqM+JVuthuVbTvpcwUkcoLJJY5C94aeOyMAZxzPBYa2+Tf3anWjD0PGLLZoaqgBa+peZnbW8OGcAY5dkBSxTyddBHKBgPYHfUKP4KPIpaCiZhoAjjb91oGPwUgwMEUEcTeDGhv0V/paqnT9HM66YmZXsqREVw5wREQGTGdpoRUwHcQiApn4tVpXZ/mHkrSAIiIAiIgNZfIAYmTNaA4HDvI8Fpl1U0bZonxu4OGFzE8ToJnRvGHN3Lm9Zj1Xd9nV6LL3T2PlFB38Vj1fFvqshY1Vxb6qmdCeSwiK7S08lXUNhjG93EnkO9Slt6RNV2rbN9pqmDad1Q5oL3nDXcwFuVRBE2CFkTBhrGgBVrtY47JUnnc2T5LdBERZmsIiIC7B8xRIPm9EQHs44KysiYdglY6AIiIAiKieeGmidNUSxxRAZL5HBrR5koCvIG859FzF9l2bk/ZOeyAd/stDrLpJpKalfS6dnZUVTwQakDLIR3j7x7uXPwW50zbet0hbW1DnGpkhE75H73F7+2Se/itfU4XeMs9JmWLInXBaZM13PB8Vaqnt7PaHPmvJ4JKeQslGCFhVf2PVcVpp6Z31Ka2it80beeSthpeXavHaOMxOa3fxO4/gCtRBC+eQMjGTz8Fd1LQmPSlc2lkkZPE0TslYcOD2EOBB5cPdW+lwurVFPrc0xjc+2SIvFHejOk2hrKRtPqSeOkq2AAVDt0cw7yfsnvzu/BSDBNFURNlp5WSxu3texwII8CF1XLXJwytERYgIiIC7TjeV6qoB2crxAXCMjCxSMEjuWWtDrK9s05Z33J0D5yHBjWN3ZceGTyHii8g2Q3rR3zVtjse02urmGZv8AJh7b8+Q4euFDl91zf71tMlrDT05/kU3YbjxPE+pXNgBowBgKxOD7IJHvfSxWTgsslE2laeEtRh7/AD2RuHuuEul2uN2l6y51s9W7/uP7I8m8B6ALDRblErgg8f8AI7yX0hZxi0UI7qeMf6QvnDGeK+gtIVfxekrRVOOSaVkb8ffYNk+7StWfhEmxrIKeeE/EgbLd+0fsrgaq6W83FsW3L8NwExA+uO7x9lJMUfB0g393co1ntUDdZ/BNcDTsmLtn02g38lz8uOaabR1/xrTnIqb8LZ09PFFHEBC3DTz71jXrfZ64d9O8f6StlLF9tg38wOa0erar4PSt0qM4/cmNp/qfho93Bb4nTSRyqfc9sg5vALOtV4uVmk6y1V1RSO4/u3dk+bTkH1CwkV7W+TEkyy9LtXAGsvdvbUgcZaXDX/5XHB+oUh2LV9ivwa2310Zmd/Il7En+U8fRfOC8IDuIBHFa6xJ8BH1bhBvIA5r56sGvdQ2UsYysNXTt/kVQ2xjwd8w+vopv0Zf4dT2ZlzggfB23RvjeODxxweY38f0WiocknQAYACL1FgAsW50NPcqCeirIxJBOwse08wfzWUiA+Z9U2Cp03d5qCoBcwHahmI3Ss5H8j4rUL6Q1hpek1RbDTVGI52HagnA3xu/MHmP0C+fLxaqyy3CShuMXVTx/R4+808we9W8dqkQYSIi2kBTX0P1gqNKugJBdTVL247gcOH4qFFJPQlWllwulC47pYmTMHi0kH2cPotWVbklEtjiolfWF2om1hJ7VWXZ8Nr9FKtS8x000n3GOP0Chd7tnZdzByuflfB6H8HiVLK39aJSwuJ6WakRabiphjNRUtyO8Ny78cLtI3bUbHd7QVF3S9WB90oKIH+DAZXN/vOB7NKsYlukefpaejgURFbMQiLLtNsrLxcIKC3QmaomdgAcGjmXHkB3oSZOmrFV6jvENuoRhzu1JIRuiZzcf97zhfS9pttLabbT0FDH1dPAwMYPzPieK02h9J0ulbUKeItmq5O1U1GMGR3cO5o5D810oVXJfc/BIREWsBERAFpNUaYt2paE09fGRI3fDOz54j4fot2iJtcA+b9V6RuemJv8AjGCWlc7EdVGOw7uB+6fA+hK0C+q54Yp4nRTRtkjeMOY8Ahw8QVHWo+ie31bn1FkndQynf1D+1EfLm33HgrEZvVEaIZXTdG9cKHWVvLjhs7jAT/cN3vhY140dqCzOd8bbZjGDumgHWMd45G8eoC0lPM6GoiniI6yCVsjfBzTke4W56peAfTNx/wCX1P8A4nfgVDUw7IUwy1DKyzPqYt7Jqcvb5FuVD83yhcvN6PTfgP0yfwk6D+BH/YPwUI68q/jdW3CQHIjeIm+AaAPxyponqWUVsfVSnEcMBkd5BuV88STOlc6acgSSuLn7/tOOT7lXMC9nnMn7MJu71vbNo/UN6c34G1zGMn+NKOrjb4ku4+gKkrTXRFRUrmVF/qTWSDf8NH2YQfHm72C21kmTAjXSuk7rqmo2LdGG07XbMtVIMRs7x/UfAeuFPektJ23S1CYKFpfM/HXVEnzykfgPAbluqenhpoGQ08TIomDDGMaAGjwCuqvduiTwL1EWACIiAIiIAiIgCIiA8d8pWpuem7HdHbdwtNFUSY3SPhbtjydxH1XqImDIprdS0tvZQ00ZjpmR9Wxgcey3uyVoDoazHj8T/wDVEUUtljBny4t9lNbNvU2Wgq6OSkqonSwPbsPYXkbQ7t3kqLdpmw2pxkt9noYJP+o2Fu2f8XH3RFlsrJtrbNuBjgqkRYkhERSAiIgCIiA//9k="
                  />
                  <div className="text-left  text-xs m-auto">
                    <h1>Ibrahim Shah</h1>
                    <p className="font-semibold text-gray-500">Support</p>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class=" w-7 mt-1  text-green-700 "
                    fill="currentColor"
                    viewBox="0 0 24 24 "
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="needhelp bg-gray-200 px-2 py-1 rounded ml-[70px] -mb-10">
          <h1 className="text-[11px]">Need Help? Chat with us</h1>
        </div>
      )}

      {openChat ? (
      <div
        onClick={toggle}
        className="h-16 w-16 cursor-pointer text-center flex items-center rounded-full bg-blue-800 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="  w-9 m-auto text-white "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      ) : ( 
      <div
        onClick={toggle}
        className="h-16 w-16 cursor-pointer text-center flex items-center rounded-full bg-blue-800 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class=" w-10 m-auto text-white "
          fill="currentColor"
          viewBox="0 0 24 24 "
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </div>
      )}  
    </div>
  );
};

export default Chat;
