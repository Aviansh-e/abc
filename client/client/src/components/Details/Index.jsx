import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const movie = location.state?.movie;

    const [visibleSections, setVisibleSections] = useState({
        genre: true,
        rating: true,
        description: true,
        location: true,
        condition: true,
        duration: true,
    });

    const toggleSection = (section) => {
        setVisibleSections((prevSections) => ({
            ...prevSections,
            [section]: !prevSections[section],
        }));
    };

    const movetootherpage = () => {
        navigate('/details/books');
    };

    // console.log('Movie object:', movie);

    if (!movie) {
        return <div>No movie data available</div>;
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <div style={{ textAlign: 'center' }}>
                    <h1>
                        Name: {movie.name} <br />
                        Date: ({movie.year})
                    </h1>
                    <img src={movie.img} alt="movie" style={styles.image} />
                    <div style={styles.details}>
                        <h4
                            style={styles.detail}
                            onClick={() => toggleSection('genre')}
                        >
                            Genres: {visibleSections.genre && <span>{movie.genre.join(', ')}</span>}
                        </h4>
                        {/* <h4
                            style={styles.detail}
                            onClick={() => toggleSection('rating')}
                        >
                            Rating: {visibleSections.rating && <span>{movie.rating}</span>}
                        </h4> */}
                        <h4
                            style={styles.detail}
                            onClick={() => toggleSection('description')}
                        >
                            Description: {visibleSections.description && <span>{movie.description}</span>}
                        </h4>
                        <h4
                            style={styles.detail}
                            onClick={() => toggleSection('location')}
                        >
                            Location: {visibleSections.location && <span>{movie.location}</span>}
                        </h4>
                        <h4
                            style={styles.detail}
                            onClick={() => toggleSection('condition')}
                        >
                            Condition: {visibleSections.condition && <span>{movie.condition}</span>}
                        </h4>
                        <h4
                            style={styles.detail}
                            onClick={() => toggleSection('duration')}
                        >
                            Duration: {visibleSections.duration && <span>{movie.duration} Min</span>}
                        </h4>
                        <button
                            style={styles.button}
                            onClick={movetootherpage}
                        >
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
    card: {
        width: '500px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
    },
    details: {
        marginTop: '20px',
    },
    detail: {
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '20px',
        width: '100px',
    },
};

export default Index;
