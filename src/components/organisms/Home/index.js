import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';
import SpinnerLoad from '../../atoms/spinner-load';
import CardManga from '../../molecules/card';

const Home = () => {
  const [items, setItems] = useState([]);
  const [mangas, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const rowCard = 3;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/manga?page=${page}&limit=12`)
      .then(function (response) {
        console.log(response.data)
        setManga(response.data.data);

        let pageArray = [];
        
        for (let number = 1; number <= response.data.pagination.items.count; number++) {
          pageArray.push(number);
        }
        setItems(pageArray);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);


  return (
    <div className='mt-3'>
      <Container>
        <Row>
        {
          loading ? (<SpinnerLoad />) : (
            mangas.length > 0 &&
            mangas.map((data, index) => (
              <Col md={3} key={index}>
                <CardManga
                title={data.title}
                buttonText="Details"
                imgSrc={data.images.jpg.image_url}
                height={300}
                author={data.authors.length > 0 && 
                  data.authors.map((author) => `${author.name} `)
                }
                />
              </Col>
            ))
          )
        }
        </Row>

        <Pagination>
          {
            items.length > 0 && items.map((data) => (
              <Pagination.Item key={data} active={data === page} onClick={() => setPage(data)}>
                {data}
              </Pagination.Item>
            ))
          }
        </Pagination>
      </Container>
    </div>
  );
};

export default Home;