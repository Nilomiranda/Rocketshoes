import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          alt="Shoe"
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe1.jpg?resize=280:280"
        />
        <strong>Really cool shoe</strong>
        <span>129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
