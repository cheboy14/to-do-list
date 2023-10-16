"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Heading from "./components/Heading";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../../api";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters."
  })
});

const CreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await addTodo({
      id: uuidv4(),
      text: values,
    });
    
    router.push("/");
    toast.success("Todo Created");
  };

  const [newTodo, setNewTodo] = useState("");
  const [todolist, setTodolist] = useState([]);



  const[loading ,isLoading]=useState(false);
  const [newTaskValue,setnewTaskValue]=useState<string>("");
  const router=useRouter();

  return (
    <div className="px-[500px] py-[200px] justify-center items-center h-full">
      <Heading title="Create Todo List" description="use this form to create a todo app"/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input  placeholder="todo name" {...field} />
                </FormControl>
                <FormDescription>
                  This is todo list name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit"  disabled={loading}>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePage;
