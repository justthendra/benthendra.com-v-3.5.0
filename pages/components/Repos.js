import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Repos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer <GITHUBTOKENINIZ>`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "justthendra") {
                pinnedItems(first: 6, types: [REPOSITORY]) {
                  edges {
                    node {
                      ... on Repository {
                        id
                        name
                        description
                        stargazers {
                          totalCount
                        }
                        forks {
                          totalCount
                        }
                        primaryLanguage {
                          name
                          color
                        }
                        url
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      

      const data = await response.json();
      console.log(data);
      setRepos(data.data.user.pinnedItems.edges.map(edge => edge.node));
    };

    fetchPinnedRepos();
  }, []);

  return (
    <>
      <div className="py-24 max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-start justify-start">
          <h1 className="flex items-center text-2xl sm:text-4xl text-start tracking-tight">
            
            <FaGithub className="dark:text-gray-300 mr-2" />
            <span className="dark:text-gray-300 text-3xl font-[Oceanwide]">
              Github Repositories
            </span>
          </h1>
          <p className="font-[galano] dark:text-gray-400 tracking-tight text-sm sm:text-base">
            Here are some of my repositories that I&apos;m proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {repos.map((repo) => (
            <a target="_blank" key={repo.id} href={repo.url}>
              <div className="p-6 border dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200  cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col max-w-sm w-full">
                      <div className="flex items-center space-x-2">
                        <h1 className="flex text-lg dark:text-gray-400 items-center font-[oceanwide] tracking-tight">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="mr-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                          </svg>{' '}
                          {repo.name}
                        </h1>
                      </div>
                      <p className="dark:text-gray-400/70 text-[13px] font-[galano] tracking-tight mt-1 break-all line-clamp-2 h-4">
                        {repo.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 w-full">
                      <div className="flex items-center justify-center">
                        <div className={`h-4 w-4 rounded-full mr-1`} style={{ backgroundColor: repo.primaryLanguage?.color }}></div>
                        <p className="font-galano font-semibold text-sm font-[oceanwide] tracking-tight dark:text-gray-400/70 ml-1">
                          {repo.primaryLanguage?.name || 'Markdown'}
                        </p>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="flex items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="dark:text-sky-400 mr-1"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                          </svg>
                          <p className="font-galano font-semibold text-sm tracking-tight font-[oceanwide] dark:text-gray-400/70 ml-1">
                            {repo.stargazers.totalCount}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="dark:text-gray-500 text-blue-600 mr-1"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="18" r="3"></circle>
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="18" cy="6" r="3"></circle>
                            <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
                            <path d="M12 12v3"></path>
                          </svg>
                          <p className="font-galano font-semibold text-sm tracking-tight font-[oceanwide] dark:text-gray-400/70 ml-1">
                            {repo.forks.totalCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
