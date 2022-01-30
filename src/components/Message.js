import React from 'react';

function Message() {

  let messages = [
    {
      id: 3,
      label: "Trantow",
      description:
        "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
      unread: true,
    },
    {
      id: 3,
      label: "Abshire",
      description:
        "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
      unread: true,
    },
    {
      id: 3,
      label: "Bode",
      description:
        "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
      unread: true,
    },
    {
      id: 3,
      label: "Dickens",
      description:
        "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
      unread: true,
    },

    {
      id: 4,
      label: "Harris",
      description: "Tailwind CSS plugins.",
      unread: true,
    },
    {
      id: 5,
      label: "help",
      description:
        "Help with Tailwind CSS and build process integration.",
      unread: true,
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
    },
  ]
  return (
    <>

      {messages.map((item, i) => {
        return (
          <div className='leading-6 flex hover:bg-neutral-800 p-2 cursor-pointer hover:bg-opacity-30 rounded-md'>
            <img className='rounded-full w-10 h-10 flex-none mr-4' src={`https://picsum.photos/200/300?random=${i}`} />
            <div>
              <p className='flex items-baseline'>
                <span className='text-green-500 text-mg font-bold tracking-wider'>{item.label}</span>
                <span className='text-sm text-gray-400 ml-2 text-xs'>01/05/2019</span>
              </p>
              <p className='text-gray-100'>
                lorem n this lesson we’ll style a message component from Discord. You’ll see how Tailwind lets us tweak our design directly from our template, all without having to write a single line of CSS ourselves. Because Tailwind’s utility classes live right alongside our markup, we won’t need to come up with any new naming patterns or conventions to keep our styling code maintainable.
              </p>

            </div>
          </div>
        )
      })}
      <a href='http://mabdullahse.com/' target="_blank" className='absolute right-2 bottom-2 rounded-md cursor-grabbing bg-white/80 p-2 text-green-600 font-bold tracking-wider text-xl'>
        Developed by mabdullahse.com </a>
    </>
  );
}

export default Message;

