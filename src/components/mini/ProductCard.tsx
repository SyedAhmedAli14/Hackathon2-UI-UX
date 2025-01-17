import CategoryrelatedProduct from "./CategoryrelatedProduct"
import PRDesign1 from "./PRDesign1"
import PRDesign2 from "./PRDesign2"
import PRDesign3 from "./PRDesign3"
import ProductbarFrontend from "./ProductbarFrontend"

export interface ProductType{
    title: string,
    image: string,
    price: number,
    discountPrice?:number
}

const ProductCard = ({ designType, showDots = false, data }: { designType: "divisibleby4" | "normalby3" | "normalby1" | "productcategorydesign" | "BAR", showDots?:boolean, data:ProductType}) => {
    return (
        <>
           {designType == "divisibleby4" && <PRDesign1 data={data} />}
           {designType == "normalby3" && <PRDesign2 data={data} />}
           {designType == "normalby1" && <PRDesign3 data={data} showDots={showDots} />}
           {designType == "productcategorydesign" && <CategoryrelatedProduct data={data} />}
           {designType == "BAR" && <ProductbarFrontend data={data} />}
        </>
    )
}

export default ProductCard
