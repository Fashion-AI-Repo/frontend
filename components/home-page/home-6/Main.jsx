"use client";

import React, { useState } from 'react';
import PopUp from './PopUp'; // Adjust the import path as necessary

export default function MainPage() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleUploadClick = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
            <div style={styles.mainContainer}>
                {/* Sidebar */}
                <aside style={styles.sidebar}>
                    <h3 style={styles.sidebarHeader}>WOMEN</h3>
                    <ul style={styles.sidebarList}>
                        <li style={styles.sidebarItem}>All categories</li>
                        <li style={styles.sidebarItem}>Dresses</li>
                        <li style={styles.sidebarItem}>Jumpsuits</li>
                        <li style={styles.sidebarItem}>Blouses</li>
                        <li style={styles.sidebarItem}>Tops</li>
                    </ul>
                </aside>

                {/* Main content */}
                <div style={styles.mainContent}>
                    {/* Filter bar */}
                    <div style={styles.filterBar}>
                        <input type="text" placeholder="Search" style={styles.searchBar} />
                        <div style={styles.filterOptions}>
                            <span style={styles.filterOption}>Color</span>
                            <span style={styles.filterOption}>Brand</span>
                            <span style={styles.filterOption}>Recommended</span>
                        </div>
                    </div>

                    {/* Clothes display grid */}
                    <div style={styles.clothesGrid}>
                        {dummyItems.map((item, index) => (
                            <div key={index} style={styles.clothingItem}>
                                <img src={item.image} alt={item.name} style={styles.itemImage} />
                                <div style={styles.itemDetails}>
                                    <span>{item.id}</span>
                                    <span>{item.brand}</span>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))}
                        {/* Upload Box */}
                        <div style={styles.uploadBox} onClick={handleUploadClick}>
                            <div style={styles.uploadContent}>
                                <h3>Upload</h3>
                            </div>
                        </div>
                    </div>

                    {/* Popup for Upload */}
                    {isPopupVisible && (
                        <PopUp onClose={closePopup} />
                    )}
                </div>

                {/* Dressing Room Section */}
                <div style={styles.dressingRoom}>
                    <h3 style={styles.dressingRoomHeader}>Kristine</h3>
                    <p>168 cm / 5'6"</p>
                    <p>Size: S</p>
                    <div style={styles.dressingRoomItems}>
                        {dressingRoomItems.map((item, index) => (
                            <div key={index} style={styles.dressingRoomItem}>
                                <img src={item.image} alt={item.name} style={styles.dressingRoomImage} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>Copyright © 2024 ib-themesinc.</p>
            </footer>
        </div>
    );
}

const dummyItems = [
    { id: 'SP-240100', brand: 'Dolce & Gabbana', price: '$100', image: 'https://via.placeholder.com/150' },
    { id: 'SP-240101', brand: 'Prada', price: '$200', image: 'https://via.placeholder.com/150' },
    { id: 'SP-240102', brand: 'Gucci', price: '$150', image: 'https://via.placeholder.com/150' },
    { id: 'SP-240103', brand: 'Versace', price: '$180', image: 'https://via.placeholder.com/150' },
];

const dressingRoomItems = [
    { name: 'Dress 1', image: 'https://via.placeholder.com/100' },
    { name: 'Dress 2', image: 'https://via.placeholder.com/100' },
];

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
        width: '15%',
        backgroundColor: '#f6f6f6',
        padding: '20px',
        boxSizing: 'border-box',
        borderRight: '1px solid #ccc',
    },
    sidebarHeader: {
        fontWeight: 'bold',
        marginBottom: '20px',
        fontSize: '18px',
    },
    sidebarList: {
        listStyle: 'none',
        padding: '0',
    },
    sidebarItem: {
        marginBottom: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    mainContent: {
        width: '65%',
        padding: '20px',
        overflowY: 'auto',
    },
    filterBar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        alignItems: 'center',
    },
    searchBar: {
        width: '70%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    filterOptions: {
        display: 'flex',
        gap: '15px',
    },
    filterOption: {
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f1f1f1',
    },
    clothesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '15px',
    },
    clothingItem: {
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
    },
    itemImage: {
        width: '100%',
        height: 'auto',
    },
    itemDetails: {
        marginTop: '10px',
    },
    uploadBox: {
        textAlign: 'center',
        border: '1px dashed #ccc',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
    },
    uploadContent: {
        color: '#555',
        fontWeight: 'bold',
    },
    popupOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        width: '400px',
    },
    fileInput: {
        marginTop: '10px',
    },
    closeButton: {
        marginTop: '10px',
        backgroundColor: '#ff8000',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    dressingRoom: {
        width: '20%',
        padding: '20px',
        borderLeft: '1px solid #ccc',
        backgroundColor: '#f6f6f6',
    },
    dressingRoomHeader: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    dressingRoomItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    dressingRoomItem: {
        textAlign: 'center',
    },
    dressingRoomImage: {
        width: '100%',
        borderRadius: '5px',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f6f6f6',
        width: '100%',
        position: 'fixed',
        bottom: '0',
    },
};
