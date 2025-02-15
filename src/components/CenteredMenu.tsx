import Link from 'next/link';

const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between">
    <Link href="/">{props.logo}</Link>

    <div>
      <ul className="flex flex-row gap-x-4 [&_svg:hover]:opacity-100 [&_svg]:size-5 [&_svg]:fill-current [&_svg]:opacity-60">
        {props.children}
      </ul>
    </div>
  </div>
);

export { CenteredMenu };
