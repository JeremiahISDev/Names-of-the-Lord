var names = [
  {
    name: 'I Am',
    ref:'Judges 13:11',
    link:'/Iam',
  },
  {
    name: 'Wonderful',
    ref:'Judges 13:18, Isaiah 9:6',
    link:'/Wonderful',
  },
  {
    name: 'Everlasting',
    ref:'Isaiah 40:28, Isaiah 9:6',
    link:'/Everlasting',
  },
  {
    name: 'The Creator',
    ref:'Isaiah 40:28',
    link:'/Creator',
  },
  {
    name: 'Understanding',
    ref:'Isaiah 40:28',
    link:'/Understanding',
  },
  {
    name: 'Unsearchable',
    ref:'Isaiah 40:28',
    link:'/Unsearchable',
  },
  {
    name: 'Counselor',
    ref:'Isaiah 9:6',
    link:'/Counselor',
  },
  {
    name: 'Mighty God',
    ref:'Isaiah 9:6',
    link:'/MightyGod',
  },
  {
    name: 'Prince of Peace',
    ref:'Isaiah 40:28',
    link:'/PrinceofPeace',
  },
  {
    name: 'God of Jacob',
    ref:'Isaiah 2:3',
    link:'/GodofJacob',
  },
  {
    name: 'Redeemer',
    ref:'Isaiah 63:16',
    link:'/Redeemer',
  },
  {
    name: 'Creator of Israel',
    ref:'Isaiah 43:15',
    link:'/CreatorofIsrael',
  },
  {
    name: 'Holy One',
    ref:'Isaiah 43:15',
    link:'/HolyOne',
  },
  {
    name: 'King',
    ref:'Isaiah 43:15',
    link:'/King',
  },
  {
    name: 'A Precious Cornerstone',
    ref:'Isaiah 28:16',
    link:'/APreciousCornerstone',
  },
  {
    name: 'A Sure Foundation',
    ref:'Isaiah 28:16',
    link:'/ASureFoundation',
  },
]

export default function Home() {
  return (
    <center><ul class="p-6 grid-cols-2 grid" id="names">

    {names.map((names) => {
      return (
        <li>
          
          <span class="p-6">
            <a
              href={names.link}
              class="block p-10 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div class="text-right text-royalb pr-2 pl-72 pb-2 pt-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg></div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-500 dark:text-white text-center">
                {names.name}
              </h5>
              <p class="font-normal text-gray-500 dark:text-gray-400 pb-6 text-center">
                {names.ref}
              </p>
            </a>
          </span>
        </li>
      );
    })}
    </ul></center>
  )
}
