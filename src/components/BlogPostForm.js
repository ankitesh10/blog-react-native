import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, intialValues }) => {
  const [title, setTitle] = useState(intialValues.title);
  const [content, setContent] = useState(intialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  intialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    padding: 5,
  },
});

export default BlogPostForm;
