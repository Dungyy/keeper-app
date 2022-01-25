import React from 'react';
import Header from './Header.jsx';
import Note from './Note';
import Footer from './Footer';
import Notes from '../Notes'

function App() {
    return (
    <div>
    <Header />
        {Notes.map(noteInfo => (
            <Note
                key={noteInfo.key}
                title={noteInfo.title}
                content={noteInfo.content}
            />
        ))}
    <Footer />
    </div>
    )}


export default App