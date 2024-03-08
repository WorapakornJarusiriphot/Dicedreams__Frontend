import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex gap-4 justify-between items-center px-4 py-2 w-full whitespace-nowrap bg-white max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/994875b2f9df4e667cef0fabf9411d18edd23c0dd8aa896b4e62adc0776aed3a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
          className="self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex-auto self-stretch my-auto text-xl font-semibold leading-8 text-black text-opacity-90 max-md:max-w-full">
          DiceDreams
        </div>
        <div className="flex gap-4 justify-between items-start self-stretch text-base font-medium tracking-wide leading-7 uppercase">
          <div className="grow justify-center px-11 py-2 text-white rounded shadow bg-zinc-600 max-md:px-5">
            register
          </div>
          <div className="grow justify-center px-8 py-2 text-white bg-red-700 rounded shadow max-md:px-5">
            log in
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-6 pt-12 pb-3 w-full max-w-[1200px] max-md:px-5 max-md:max-w-full">
        <div className="mt-5 text-4xl font-bold leading-10 text-slate-100 max-md:max-w-full">
          Make an appointment to play a board game.
        </div>
        <div className="shrink-0 mt-8 h-px bg-gray-500 bg-opacity-20 max-md:max-w-full" />
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <div className="flex gap-2 justify-between px-3 py-2 text-base leading-6 text-gray-400 rounded-lg border-2 border-solid shadow-sm bg-neutral-950 border-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/188b8fad083515b4fe8d94ab75570ca48232157453017f7ad9972f448836cb77?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="self-start w-6 aspect-square"
                  />
                  <div className="flex-auto">
                    Search for User, Store, Location, or Game
                  </div>
                </div>
                <div className="mt-4 text-sm font-medium leading-5 text-white">
                  Number of people
                </div>
                <div className="justify-center py-2 pr-11 pl-3 mt-1.5 text-base leading-6 text-gray-400 whitespace-nowrap rounded-lg border border-solid shadow-sm bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)] max-md:pr-5">
                  Search for Number of people
                </div>
                <div className="flex flex-col justify-center px-3 mt-4 w-full tracking-normal whitespace-nowrap rounded border border-solid border-[color:var(--\_components-input-outlined-enabledBorder,rgba(255,255,255,0.23))]">
                  <div className="flex gap-0 justify-between pb-4">
                    <div className="flex flex-col flex-1">
                      <div className="justify-center self-start px-1 text-xs leading-3 text-white aspect-[35] bg-neutral-900">
                        Select date
                      </div>
                      <div className="mt-3.5 text-base leading-6 text-white text-opacity-40">
                        MM/DD/YYYY
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3208627431f5d099a0c113f1f89bd5297337915e0d30cf2adde30710cda0b7?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="self-start mt-4 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center px-3 mt-4 w-full tracking-normal whitespace-nowrap rounded border border-solid border-[color:var(--\_components-input-outlined-enabledBorder,rgba(255,255,255,0.23))]">
                  <div className="flex gap-0 justify-between pb-4">
                    <div className="flex flex-col flex-1">
                      <div className="justify-center self-start px-1 text-xs leading-3 text-white aspect-[35] bg-neutral-900">
                        Select time
                      </div>
                      <div className="mt-3.5 text-base leading-6 text-white text-opacity-40">
                        hh:mm aa
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1fccd2121764ad463f80116bd09f9b45617d298c85e2217af19bbc18a030f9d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="self-start mt-4 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="justify-center self-start px-3 py-2.5 mt-8 text-sm font-semibold leading-4 whitespace-nowrap bg-white rounded-md aspect-[2.25] text-zinc-900">
                  Search
                </div>
                <div className="mt-4 text-sm leading-5 text-white">game</div>
                <div className="flex gap-2.5 justify-between mt-4 text-base font-light leading-6 text-white whitespace-nowrap">
                  <div className="my-auto w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Werewolf</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white whitespace-nowrap">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Coup</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white whitespace-nowrap">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Uno</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Magic the gethering</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white whitespace-nowrap">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">เกมเศรษฐี</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Warhummer 40k</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base font-light leading-6 text-white whitespace-nowrap">
                  <div className="my-auto w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Splendor</div>
                </div>
                <div className="flex gap-2.5 justify-between mt-4 text-base text-white">
                  <div className="w-5 h-5 rounded border border-solid bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)]" />
                  <div className="flex-auto">Kill Team</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-col p-4 rounded-xl shadow max-md:max-w-full">
                  <div className="flex gap-2.5 justify-between pr-2.5 text-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40b45a254a841010b5c1545e456426e4588ba2bce88a9f6c9df92c189b70e8f3?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="my-auto w-8 aspect-square rounded-[100px]"
                      />
                      <div className="flex flex-col flex-1 max-md:max-w-full">
                        <div className="text-xl font-semibold leading-8 text-slate-100 max-md:max-w-full">
                          Outcast Gaming
                        </div>
                        <div className="text-sm leading-5 text-slate-300 max-md:max-w-full">
                          3 มกราคม เวลา 13:00 น.{" "}
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bfa1a80ec639a4710bfb926e84d47cfd3f06a370116d82935f446a20df88e5b?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="my-auto w-7 aspect-square"
                    />
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d71b6640a8fbb377220adac24fdd6c742736cb55d32d21e8b1e1dd109bf8afd8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="mt-6 w-full aspect-[1.75] max-md:max-w-full"
                  />
                  <div className="mt-6 text-base leading-6 text-slate-300 max-md:max-w-full">
                    <span className="text-xl font-bold leading-8">
                      Magic The Gathering Commander 1st friendly match{" "}
                    </span>
                    <br />
                    <br />
                    วันศุกร์ที่ 5 มกราคม พ.ศ. 2567 เวลา 15:00 - 21:00 น.
                    <br />
                    <br />
                    กิจกรรมกระชับมิตรครั้งแรกของผู้เล่น Commander
                    <br />
                    เข้าร่วมฟรี เล่นไม่เป็นสอนให้เป็นในงานเลย
                  </div>
                </div>
                <div className="flex flex-col p-4 mt-6 rounded-xl border border-solid shadow bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)] max-md:max-w-full">
                  <div className="flex gap-2.5 justify-between pr-2.5 text-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="my-auto w-8 aspect-square rounded-[100px]"
                      />
                      <div className="flex flex-col flex-1 max-md:max-w-full">
                        <div className="text-xl font-semibold leading-8 text-slate-100 max-md:max-w-full">
                          วรปกร จารุศิริพจน์
                        </div>
                        <div className="text-sm leading-5 text-slate-300 max-md:max-w-full">
                          9 กุมภาพันธ์ เวลา 21:59 น.{" "}
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/602dcffe72fe2715dd374249f813eed9ec5ee88f17a1ddfb2c4fcabe40ed2a26?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="my-auto w-7 aspect-square"
                    />
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f933ac151e1290f38156fbd3f7c161261279d3c80e7fc53d8b52300181f40696?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="mt-6 w-full aspect-[2.17] max-md:max-w-full"
                  />
                  <div className="mt-6 text-base leading-6 text-slate-300 max-md:max-w-full">
                    <span className="text-xl font-bold leading-8">
                      Werewolf
                    </span>
                    <br />
                    <br />
                    วันอาทิตย์ที่ 21 กุมภาพันธ์ พ.ศ. 2567 เวลา 18.30 น.
                    <br />
                    <br />
                    เอา Werewolf ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก
                    <br />
                    สถานที่ : มหาวิทยาลัยราชภัฏนครปฐม
                    <br />
                    จำนวนคนจะไป : 1/5
                  </div>
                  <div className="flex flex-wrap gap-5 justify-between content-center py-6 w-full text-base font-semibold leading-4 whitespace-nowrap max-md:max-w-full">
                    <div className="flex flex-1 justify-center items-center px-16 py-2.5 text-white bg-red-800 rounded-md max-md:px-5">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d13dc5fa04f5b5b5938b8c84a55357b00214f6ae37788af0666f76183e4de351?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                          className="w-7 aspect-square"
                        />
                        <div className="my-auto">เข้าร่วม</div>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-between px-20 py-2.5 text-white rounded-md border border-white border-solid bg-red-800 bg-opacity-0 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2215d13fc0148aa63c18cef9d137276010052382224f9ffd944242c8b7f4f9?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="w-7 aspect-square"
                      />
                      <div className="grow my-auto">แสดงความคิดเห็น</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 mt-6 rounded-xl border border-solid shadow bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)] max-md:max-w-full">
                  <div className="flex gap-2.5 justify-between pr-2.5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                      <div className="flex justify-center items-center my-auto w-8 h-8 aspect-square bg-sky-950 rounded-[100px]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b08b689ae32018db4f2e0e607a00dc5e3722dc40ac5ee1f5afb22b5338f4a?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 text-center max-md:max-w-full">
                        <div className="text-xl font-semibold leading-8 text-slate-100 max-md:max-w-full">
                          ณัฐวุฒิ แก้วมหา
                        </div>
                        <div className="text-sm leading-5 text-slate-300 max-md:max-w-full">
                          9 กุมภาพันธ์ เวลา 21:59 น.{" "}
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c74d9a0114320e54f853e397b9825f94593ab3a6408e0644d1a4450ff2b6c433?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="my-auto w-7 aspect-square"
                    />
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f76aedc0c2101d5181dd8c5929ac72ce218ef8882367502b080cf5b2760881d?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="mt-6 w-full aspect-[2.13] max-md:max-w-full"
                  />
                  <div className="mt-6 text-base leading-6 text-slate-300 max-md:max-w-full">
                    <span className="text-xl font-bold leading-8">
                      ซาเลม 1692
                    </span>
                    <br />
                    <br />
                    วันอาทิตย์ที่ 21 กุมภาพันธ์ พ.ศ. 2566 เวลา 18.30 น.
                    <br />
                    <br />
                    เอา Werewolf ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก
                    <br />
                    สถานที่ : มหาวิทยาลัยราชภัฏนครปฐม
                    <br />
                    จำนวนคนจะไป : 1/5
                  </div>
                  <div className="flex flex-wrap gap-5 justify-between content-center py-6 w-full text-base font-semibold leading-4 whitespace-nowrap max-md:max-w-full">
                    <div className="flex flex-1 justify-center items-center px-16 py-2.5 text-white bg-red-800 rounded-md max-md:px-5">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d13dc5fa04f5b5b5938b8c84a55357b00214f6ae37788af0666f76183e4de351?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                          className="w-7 aspect-square"
                        />
                        <div className="my-auto">เข้าร่วม</div>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-between px-20 py-2.5 text-white rounded-md border border-white border-solid bg-red-800 bg-opacity-0 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/286cc39c70ab44a2b5a234f8641fd899f08986af4cdcfba1f10941ac72b3d561?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="w-7 aspect-square"
                      />
                      <div className="grow my-auto">แสดงความคิดเห็น</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 mt-6 rounded-xl border border-solid shadow bg-neutral-950 border-[color:var(--neutral-outlined-Border,#32383E)] max-md:max-w-full">
                  <div className="flex gap-2.5 justify-between pr-2.5 text-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7078c3e93c4b3e323b353d6915abb308c4c6739cf81c5e4cabc4472eb3cb2aad?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="my-auto w-8 aspect-square rounded-[100px]"
                      />
                      <div className="flex flex-col flex-1 max-md:max-w-full">
                        <div className="text-xl font-semibold leading-8 text-slate-100 max-md:max-w-full">
                          วรปกร จารุศิริพจน์
                        </div>
                        <div className="text-sm leading-5 text-slate-300 max-md:max-w-full">
                          9 กุมภาพันธ์ เวลา 21:59 น.{" "}
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/602dcffe72fe2715dd374249f813eed9ec5ee88f17a1ddfb2c4fcabe40ed2a26?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                      className="my-auto w-7 aspect-square"
                    />
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9030c46be828b5ac707523794d1a8f342489a76a8070a20355e19496a35b049?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="mt-6 w-full aspect-[2.27] max-md:max-w-full"
                  />
                  <div className="mt-6 text-base leading-6 text-slate-300 max-md:max-w-full">
                    <span className="text-xl font-bold leading-8">Spyfall</span>
                    <br />
                    <br />
                    วันอาทิตย์ที่ 21 กุมภาพันธ์ พ.ศ. 2566 เวลา 18.30 น.
                    <br />
                    <br />
                    เอา Werewolf ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก
                    <br />
                    สถานที่ : มหาวิทยาลัยราชภัฏนครปฐม
                    <br />
                    จำนวนคนจะไป : 1/5
                  </div>
                  <div className="flex flex-wrap gap-5 justify-between content-center py-6 w-full text-base font-semibold leading-4 whitespace-nowrap max-md:max-w-full">
                    <div className="flex flex-1 justify-center items-center px-16 py-2.5 text-white bg-red-800 rounded-md max-md:px-5">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54e5ba1d6a93c27d07018be4258c710d18d213d2ff0947ebe0281762c2d0761c?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                          className="w-7 aspect-square"
                        />
                        <div className="my-auto">เข้าร่วม</div>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-between px-20 py-2.5 text-white rounded-md border border-white border-solid bg-red-800 bg-opacity-0 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/451bcb25ff1daaa46bc12f6e64bd32bf2f03a96a425d44fc1afca0505e3223ec?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                        className="w-7 aspect-square"
                      />
                      <div className="grow my-auto">แสดงความคิดเห็น</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5 self-center px-1.5 mt-12 max-w-full text-sm tracking-normal leading-5 text-center text-white whitespace-nowrap w-[424px] max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/405625f0cc6958f0de81d451e03e737b21665c52c9dfef4a27ad1fd4d492cdb8?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff5074e2ec990e70e5cb5d731a06a55779c205bc929fd73e748060ccb6c4e3f?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <div className="flex flex-col justify-center aspect-square text-black text-opacity-90">
                    <div className="justify-center items-center px-3.5 h-8 bg-blue-300 rounded aspect-square">
                      1
                    </div>
                  </div>
                  <div className="justify-center px-3.5 py-3 aspect-square">
                    2
                  </div>
                  <div className="justify-center px-3.5 py-3 aspect-square">
                    3
                  </div>
                  <div className="justify-center px-3 py-3 aspect-square">
                    4
                  </div>
                  <div className="justify-center px-3.5 py-3 aspect-square">
                    5
                  </div>
                  <div className="justify-center px-3.5 py-3 aspect-square">
                    6
                  </div>
                  <div className="justify-center px-3.5 py-3 aspect-square">
                    7
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1622b7a488ba7dd006e7a5e8c090720413d6dcbe371dc3ebee07bc912ea445?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/507d5ca7b37e6fef3995f220a30362921c1b3dae8b04e1c4281e8e092e220afc?apiKey=0aa496f8086b4cc2a69fbe182a1c75eb&"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full text-xs tracking-wide leading-5 text-white bg-white bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <div>
            <span className="text-xl leading-8 text-white">DiceDreams</span>
            <br />
            <br />
            <br />
            <span className="text-white">
              Copyright © 2024 WOJA, DiceDreams
            </span>
          </div>
          <div>
            เกี่ยวกับเรา
            <br />
            นโยบายความเป็นส่วนตัว
            <br />
            เงื่อนไขการใช้งาน
            <br />
            ติดต่อเรา
            <br />
            คำถามที่พบบ่อย
            <br />
            คู่มือการใช้งาน
            <br />
            ศูนย์ช่วยเหลือ{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

