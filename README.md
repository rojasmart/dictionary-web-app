# Dictionary Web Application

A modern, feature-rich dictionary web application built with React and Chakra UI that allows users to look up word definitions, translations, listen to pronunciations, and save favorite words.

![Main App Screenshot](https://github.com/user-attachments/assets/39590b09-0ffe-4a39-b892-c050c0582525)

## App Details
| Favorite and Translation | User History and Favorite  |
|:---:|:---:|
| ![Detail view 1](https://github.com/user-attachments/assets/1ca098ca-c7fb-4a50-afa9-23cf38544ca3) | ![Detail view 2](https://github.com/user-attachments/assets/6781120e-02a3-44b2-80f1-79a16eb09dff) |
| **No Audio Message** | **Font Selector and Dark Theme and Generate Random** |
| ![Detail View 3](https://github.com/user-attachments/assets/0c8991bb-feb0-4893-9956-da76b5b9c293) | ![Detail View 4](![image](https://github.com/user-attachments/assets/ebd9fbdb-d6a0-4861-be4d-e89d06f57214)
|



## Features

### Core Functionality

- **Word Definitions**: Get detailed definitions, examples, synonyms, and parts of speech using the [Free Dictionary API](https://dictionaryapi.dev/)
- **Audio Pronunciation**: Listen to the correct pronunciation of words
- **Random Word Generator**: Discover new vocabulary with a random word feature
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### User Experience

- **Dark/Light Theme**: Toggle between dark and light modes for comfortable reading in any environment
- **Font Customization**: Choose from multiple font families (Inter, Inconsolata, Lora)
- **Search History**: View and access your recent searches
- **Error Handling**: Clear feedback when words aren't found or errors occur

### User Accounts

- **User Authentication**: Create an account to save your preferences and favorites
- **Persistent Storage**: User data saved via localStorage
- **Favorites System**: Save words to review later
- **Search History**: Track and revisit your previously searched words

### Language Support

- **Word Translation**: Translate words to multiple languages
- **Supported Languages**: Spanish, French, German, Italian, Portuguese, and more
- **Language Switching**: Easily switch between different target languages

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Build tool and development server
- **Chakra UI**: Component library for consistent styling
- **APIs**:
  - Dictionary API (dictionaryapi.dev)
  - Translation API
  - Random Word API
- **LocalStorage**: For persistent data storage
- **PropTypes**: Type checking for React components

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/dictionary-web-app.git
cd dictionary-web-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Search for a word**: Type a word in the search box and press enter or click the search icon
2. **Listen to pronunciation**: Click on the speaker icon to hear the word
3. **Add to favorites**: If logged in, click the star icon to add a word to your favorites
4. **Change theme**: Toggle between light and dark modes using the theme switch
5. **Change font**: Select your preferred font from the dropdown
6. **Translate**: Choose a target language from the dropdown to see the translation
7. **Random word**: Click the "Random" button to discover a new word
8. **Login/Register**: Create an account to save your favorites and search history

## Future Development

- **Flashcards Game**: Educational feature for learning saved words through spaced repetition
- **Advanced Search Filters**: Search by part of speech, origin, or other criteria
- **Word of the Day**: Daily featured word with notifications
- **Offline Mode**: Access basic functionality without an internet connection
- **Mobile Application**: Native mobile app for iOS and Android
- **User-contributed Content**: Allow users to add examples or notes to words
- **Social Features**: Share interesting words with friends or social media
- **Progress Tracking**: Track vocabulary growth and learning progress

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or create an issue for any bugs or feature suggestions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/)
- [Random Word API](https://random-word-api.herokuapp.com/)
- [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php)
- Font families: Inter, Inconsolata, and Lora
