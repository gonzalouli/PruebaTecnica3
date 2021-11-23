import React from 'react';
 

export default function ListComponent({title}) {
    return (
        <div style={styles.container}>
            <h3>{title}Lista</h3>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRarius:3,
        width: 250
    }
}
