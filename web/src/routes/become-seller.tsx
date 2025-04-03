import { createFileRoute } from '@tanstack/react-router';
import BecomeSellerPage from '@/pages/vendor/BecomeSellerPage';

export const Route = createFileRoute('/become-seller')({
  component: BecomeSellerPage,
});
