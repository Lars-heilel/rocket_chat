import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AuthCard } from "../ui/elements/auth-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router";

const formSchema = z.object({
  email: z.string().email({ message: "Неверный формат email." }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 6 символов." }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <AuthCard
      title="Sign in to your account"
      errorTitle="Login error occurred"
      className={className}
      footerContent={
        <>
          {" "}
          <span>Need an account?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.REGISTER}>
            {"Register"}
          </Link>
        </>
      }
      {...props}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control} // <-- Передайте control
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@mail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control} // <-- Передайте control
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {"Password"}
                  <Link
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    to={FRONTEND_PATHS.FORGOT_PASSWORD}
                  >
                    {"Forgot password?"}
                  </Link>
                </FormLabel>

                <FormControl>
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={"lg"} className="w-full" type="submit">
            Войти
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
