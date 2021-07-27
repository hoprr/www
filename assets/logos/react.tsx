import * as React from "react";

function ReactLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={120} height={85} fill="none" {...props}>
      <path
        d="M94.97 42.458c0 4.619-5.8 8.995-14.695 11.71 2.053 9.037 1.14 16.227-2.879 18.529-.926.54-2.01.795-3.192.795v-3.168c.655 0 1.183-.128 1.625-.37 1.938-1.108 2.779-5.328 2.123-10.757a43.573 43.573 0 00-.727-4.177c-2.793.682-5.844 1.208-9.05 1.549-1.925 2.628-3.92 5.016-5.93 7.104 4.646 4.306 9.008 6.665 11.973 6.665v3.169c-3.92 0-9.051-2.786-14.24-7.617-5.188 4.803-10.319 7.56-14.239 7.56v-3.17c2.95 0 7.327-2.344 11.973-6.62a67.154 67.154 0 01-5.886-7.091c-3.222-.341-6.272-.867-9.066-1.564-.327 1.421-.57 2.8-.74 4.121-.67 5.428.156 9.649 2.08 10.771.428.256.984.37 1.64.37v3.169c-1.198 0-2.281-.256-3.222-.796-4.005-2.302-4.903-9.478-2.836-18.487-8.866-2.728-14.639-7.09-14.639-11.695 0-4.618 5.802-8.994 14.696-11.708-2.053-9.038-1.14-16.228 2.879-18.53.926-.54 2.01-.796 3.207-.796 3.92 0 9.05 2.786 14.24 7.617 5.187-4.803 10.319-7.56 14.238-7.56 1.198 0 2.28.256 3.222.796 4.005 2.302 4.903 9.478 2.836 18.487 8.837 2.714 14.61 7.09 14.61 11.694zm-18.557 9.478a63.828 63.828 0 00-1.924-5.613 67.202 67.202 0 01-1.868 3.41 76.728 76.728 0 01-2.052 3.326 64.494 64.494 0 005.844-1.123zm-6.528-15.133a75.682 75.682 0 00-3.435-5.428 74.363 74.363 0 00-6.443-.284c-2.152 0-4.304.1-6.414.27a78.335 78.335 0 00-3.45 5.4 73.905 73.905 0 00-2.964 5.655 74 74 0 002.95 5.67 75.682 75.682 0 003.436 5.428c2.123.184 4.276.284 6.442.284 2.152 0 4.305-.1 6.414-.27a78.308 78.308 0 003.45-5.4 73.905 73.905 0 002.964-5.655 79.43 79.43 0 00-2.95-5.67zm4.604 1.847a60.763 60.763 0 001.967-5.655 64.15 64.15 0 00-5.873-1.137 78.479 78.479 0 012.053 3.368 80.708 80.708 0 011.853 3.424zM60.036 23.488a58.647 58.647 0 00-3.963 4.548c1.283-.057 2.594-.1 3.92-.1 1.34 0 2.665.029 3.962.1a55.514 55.514 0 00-3.92-4.548zm-10.605 8.37a64.494 64.494 0 00-5.844 1.122 63.86 63.86 0 001.924 5.613 67.202 67.202 0 011.867-3.41 94.104 94.104 0 012.053-3.325zm10.533 29.57a58.626 58.626 0 003.963-4.547 88.41 88.41 0 01-3.92.1c-1.34 0-2.665-.029-3.962-.1a55.533 55.533 0 003.92 4.547zm-10.547-8.37a78.377 78.377 0 01-3.906-6.777 60.784 60.784 0 00-1.967 5.655c1.867.44 3.835.824 5.873 1.123zm-12.9-17.79c-5.045 2.146-8.31 4.96-8.31 7.19 0 2.231 3.265 5.059 8.31 7.19 1.226.526 2.566.995 3.949 1.436.812-2.785 1.881-5.684 3.207-8.654-1.312-2.956-2.366-5.84-3.165-8.611-1.41.44-2.75.923-3.99 1.45zm7.669-20.305c-1.939 1.108-2.78 5.328-2.124 10.756.157 1.336.413 2.743.727 4.178 2.794-.682 5.844-1.208 9.05-1.549 1.925-2.629 3.92-5.016 5.93-7.105-4.646-4.305-9.008-6.664-11.973-6.664-.641.014-1.183.142-1.61.384zM77.995 25.79c.67-5.429-.157-9.649-2.081-10.771-.428-.256-.984-.37-1.64-.37-2.95 0-7.325 2.345-11.972 6.622a67.154 67.154 0 015.887 7.09c3.22.341 6.271.867 9.065 1.564a39.68 39.68 0 00.741-4.135zm5.488 9.477c-1.226-.526-2.566-.994-3.949-1.435-.812 2.785-1.881 5.684-3.207 8.654 1.312 2.955 2.366 5.84 3.165 8.61 1.41-.44 2.75-.923 4.005-1.449 5.046-2.145 8.31-4.959 8.31-7.19-.015-2.23-3.279-5.058-8.324-7.19z"
        fill="#61DAFB"
      />
      <path
        d="M59.993 35.965c3.597 0 6.514 2.907 6.514 6.493 0 3.587-2.917 6.494-6.514 6.494-3.598 0-6.514-2.907-6.514-6.494 0-3.586 2.916-6.493 6.514-6.493z"
        fill="#61DAFB"
      />
    </svg>
  );
}

export default ReactLogo;
