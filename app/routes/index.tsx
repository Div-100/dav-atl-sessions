import sessions from "~/services/sessions";

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="font-thin text-4xl m-5">
        DAV Koylanagar ATL Session details
      </div>
      <div className="flex flex-col">
        {sessions.map((x, i) => {
          return (
            <div
              className="p-5 m-5 bg-zinc-700 flex flex-col text-white rounded-sm"
              key={i}
            >
              <div className="font-semibold text-2xl my-1">Session Details</div>
              <div className="my-1">
                <span className="font-semibold">Date: </span>
                {x.date}
              </div>
              <div className="my-1">
                <span className="font-semibold">Classes: </span>
                {x.classes}
              </div>
              <div className="my-1">
                <span className="font-semibold">Absent Mentors: </span>
                {x.absentMentors}
              </div>
              <div className="my-1">
                <span className="font-semibold">Present Students: </span>
                {x.presentStudents}
              </div>
              <div className="max-w-[60%] text-justify my-1">
                <span className="font-semibold">Minutes {"->"}</span>
                <br />
                <span dangerouslySetInnerHTML={{ __html: x.moments }}></span>
              </div>
              <div className="my-1 flex">
                <span className="font-semibold">Resources: </span>
                {x.resources.map((x, i) => {
                  return (
                    <a href={x.url} key={i} className="flex items-center mx-2">
                      {x.name}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mx-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
