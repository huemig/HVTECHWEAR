import React from "react";
import { useState, useEffect } from "react";
import Headers from "../components/headers";
import Footer from "../components/footer";
import down from "../assets/images/arrow_drop_down_white_24dp.svg";

const Items = () => {
  return (
    <div class="content">
      <Headers />
      <div class="filter-cat">
        <div class="filterlist">
          <select name="category" id="cat">
            <option value="">Filter By Gender</option>
            <option value="">Men</option>
            <option value="">Women</option>
          </select>
        </div>
        <h1>T-Shirts</h1>
      </div>
      <div class="bi-section">
        <div class="cat-list">
          <div class="heading">
            <h1>Category List</h1>
          </div>
          <div class="list">
            <div class="cat-drop">
              <p>Shirts</p>
              <img src={down} alt="down" />
            </div>
            <div class="cat-drop">
              <p>T-Shirts</p>
              <img src={down} alt="down" />
            </div>
            <div class="cat-drop">
              <p>Bottoms</p>
              <img src={down} alt="down" />
            </div>
          </div>
        </div>
        <div class="tshirt-grid-cont">
          <div class="heading">
            <h1>Men's</h1>
          </div>
          <div class="tshirt-grid">
            <div class="grid-item">
              <div class="image">
                <img src="./images/cart001.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
            <div class="grid-item">
              <div class="image">
                <img src="./images/cart002.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
            <div class="grid-item">
              <div class="image">
                <img src="./images/cart003.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
            <div class="grid-item">
              <div class="image">
                <img src="./images/cart004.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
            <div class="grid-item">
              <div class="image">
                <img src="./images/offer004.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
            <div class="grid-item">
              <div class="image">
                <img src="./images/women003.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
          </div>
          <div class="wheading">
            <h1>T-Shirt</h1>
          </div>
          <div class="tshirt-grid">
            <div class="grid-item">
              <div class="image">
                <img src="./images/women001.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>

            <div class="grid-item">
              <div class="image">
                <img src="./images/women002.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>

            <div class="grid-item">
              <div class="image">
                <img src="./images/women004.png" alt="item" />
              </div>
              <div class="info">
                <p class="name">name</p>
                <p>Description</p>
              </div>
              <div class="price">
                <p>1500$</p>
                <button>Add +</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pages">
        <button>
          <a href="/">1</a>
        </button>

        <button>
          <a href="/">2</a>
        </button>

        <button>
          <a href="/">3</a>
        </button>

        <button>
          <a href="/">4</a>
        </button>

        <button>
          <a href="/">5</a>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Items;
