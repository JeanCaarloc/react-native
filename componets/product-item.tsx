import { View, StyleSheet, Image, Text, Button } from "react-native";
import { Product } from "../types/Product";

type Props ={
    product: Product;
}

export const ProductItem = (props: Props) =>{
    return(
        <View style={styles.container}>
            <Image
                //chamando imagem remota
                source={{uri: props.product.image}}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{props.product.name}</Text>
                <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
                <Button title="Comprar" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20
    },
    image:{
        width: 100,
        height: 100
    },
    info:{
        flex: 1,
        marginLeft: 20,
        backgroundColor: "rgb(128, 128, 128)"
    },
    name:{
        fontSize: 15,
        fontWeight:"bold",
        marginBottom: 10,
    },
    price:{
        color: "green",
        fontSize: 12,
        marginBottom: 10,
    }

});