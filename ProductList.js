import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="row">
          {data.map((item) => (
            <div className="col-6 col-md-2" key={item.id}>
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text" style={{ color: 'red' }}>{item.price} USD</p>
                  <button className="btn btn-sm btn-warning editButton" data-id={item.id} data-toggle="modal" data-target="#myModal">Edit</button>
                  <button className="btn btn-sm btn-danger deleteButton" data-id={item.id} style={{ float: 'right' }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
