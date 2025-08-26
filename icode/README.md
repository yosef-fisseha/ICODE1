# Project Overview

This project is a web application designed to provide online courses. Each course includes detailed information, such as the title, description, instructor, rating, and a list of videos hosted on YouTube. The application is built using React and Next.js, leveraging TypeScript for type safety.

## Project Structure

```
icode
├── app
│   ├── courses
│   │   ├── [id]
│   │   │   └── page.tsx        # React component for displaying course details
│   │   └── data
│   │       ├── 1.json          # JSON data for the first course
│   │       ├── 2.json          # JSON data for the second course
│   │       ├── 3.json          # JSON data for the third course
│   │       └── ...             # Additional JSON files for other courses
│   └── layout.tsx               # Layout component for consistent structure
├── components
│   ├── dashboard-layout.tsx      # Dashboard layout component
│   └── ui
│       ├── button.tsx            # Reusable button component
│       ├── card.tsx              # Card component for displaying content
│       ├── dialog.tsx            # Dialog component for modal popups
│       └── ...                   # Other UI components
├── package.json                   # npm configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Project documentation
```

## Features

- **Course Details**: Each course page displays comprehensive information about the course, including:
  - Title
  - Description
  - Instructor
  - Rating
  - Number of students enrolled
  - Duration of the course
  - List of video lectures

- **Video Playback**: Users can play video lectures in a modal dialog, providing a seamless learning experience.

- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd icode
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.