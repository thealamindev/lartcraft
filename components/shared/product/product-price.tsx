import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}:{value:number; className?:string}) => {

    const stringValue = value.toFixed(2);
    const [intValue, floteValue] = stringValue.split(".");

  return (
   <p className={cn("text-2xl", className)}>
    <span className="text-xs align-supper">$</span>
    {intValue}
    <span className="text-xs align-supper">.{floteValue}</span>
   </p>
  )
}

export default ProductPrice